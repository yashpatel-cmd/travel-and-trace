import React, { useState, useEffect } from 'react';
import './Contact.css';


const TodoBox = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos);
        setTodos(parsedTodos);
        console.log(' Todos loaded from Local Storage:', parsedTodos);
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0 || localStorage.getItem('todos')) { 
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log(' Todos saved to Local Storage:', todos);
    }
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        text: input.trim(),
        completed: false
      };
      setTodos(prevTodos => {
          const updatedTodos = [...prevTodos, newTodo];
          console.log('➕ Todo Added:', newTodo);
          return updatedTodos;
      });
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(prevTodos => {
        const updatedTodos = prevTodos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        const toggledTodo = updatedTodos.find(t => t.id === id);
        console.log('🔁 Todo Toggled:', toggledTodo);
        return updatedTodos;
    });
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => {
        const deletedTodo = prevTodos.find(t => t.id === id);
        const updatedTodos = prevTodos.filter(todo => todo.id !== id);
        console.log('❌ Todo Deleted:', deletedTodo);
        return updatedTodos;
    });
  };

  return (
    <div className="todo-box-wrapper">
      <h3 className="todo-heading">Task Tracker (Local Storage)</h3>
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task..."
          className="todo-input"
        />
        <button type="submit" className="todo-add-btn">Add Task</button>
      </form>
      
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }} className="todo-text">
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="todo-delete-btn">Delete</button>
          </li>
        ))}
      </ul>
      
      <p className="todo-summary">
        Total Tasks: **{todos.length}** | Completed: **{todos.filter(t => t.completed).length}**
      </p>
    </div>
  );
};


const Contact = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (Object.values(parsedData).some(val => val !== '')) {
             console.log('✅ Contact Form Data loaded from Local Storage (Autofill):', parsedData);
             return parsedData;
        }
      } catch (error) {
        console.error('Error parsing saved form data:', error);
      }
    }
    return { name: '', email: '', subject: '', message: '' };
  });

  useEffect(() => {
    if (formData.name || formData.email || formData.subject || formData.message) {
      localStorage.setItem('contactFormData', JSON.stringify(formData));
      console.log('💾 Contact Form Data saved to Local Storage (Autofill):', formData);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = {
    address: '#135 block, Barnard St, Brooklyn, London 10036, UK',
    telephones: ['+(12)1234-11-24', '+(12)1234-11-25'],
    emails: ['example@mail.com', 'example@maillt.com'],
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    
    const existingSubmissionsString = localStorage.getItem('submittedMessages');
    
    let existingSubmissions = [];
    if (existingSubmissionsString) {
      try {
        existingSubmissions = JSON.parse(existingSubmissionsString);
      } catch (error) {
        console.error('Error parsing submitted messages:', error);
      }
    }
    
    const newSubmission = { ...formData, submittedAt: new Date().toISOString() };
    existingSubmissions.push(newSubmission);
    
    localStorage.setItem('submittedMessages', JSON.stringify(existingSubmissions));
    
    console.log('✉️ New message saved to submittedMessages in Local Storage:', newSubmission);
    alert(`Message sent and stored! Check console and Local Storage for the list.`);
    
    localStorage.removeItem('contactFormData');
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  
  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div> 
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>
              Home <i className="fa fa-arrow-right" aria-hidden="true"></i> Contact
            </p>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container contact-grid-container">

          <div className="contact-form-wrapper">
            <h5 className="contact-subheading">FIND US</h5>
            <h2 className="contact-main-heading">Get In Touch With Us</h2>
          
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="form-input" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="form-input" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group-row">
                <input 
                  type="text"
                  placeholder="Subject" 
                  className="form-input" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group-row">
                <textarea 
                  placeholder="Message" 
                  className="form-textarea" 
                  rows="6" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="send-message-btn">Send Message</button>
            </form>
          </div>
          
          <div className="contact-info-wrapper">
            <div className="contact-info-block">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <p className="info-label">Address</p>
              <p className="info-detail">{contactInfo.address}</p>
            </div>
            <div className="contact-info-block">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <p className="info-label">Telephone</p>
              {contactInfo.telephones.map((tel, index) => (
                <p key={index} className="info-detail">{tel}</p>
              ))}
            </div>
            <div className="contact-info-block">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <p className="info-label">Email Us</p>
              {contactInfo.emails.map((email, index) => (
                <p key={index} className="info-detail">{email}</p>
              ))}
            </div>
          </div>

        </div>
        
        <div className="container todo-section-container">
            <TodoBox />
        </div>
        
      </section>
      
    </>
  );
}

export default Contact;