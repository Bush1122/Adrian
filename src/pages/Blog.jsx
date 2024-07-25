import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import blog1 from '../img/blog-post-1.png';
import blog2 from '../img/blog-post-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

interface Comment {
  name: string;
  date: string;
  text: string;
  replies: Comment[];
}

const dummyComments: Array<Comment> = [
  {
    name: 'Carole Marvin.',
    date: '17-5-2024',
    text: 'Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea lupta definitionem.',
    replies: [], 
  },
  {
    name: 'Carole Marvin.',
    date: '17-5-2024',
    text: 'Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea lupta definitionem.',
    replies: [], 
  },
 
];

const Blog = () => {
  const [comments, setComments] = useState(dummyComments);
 
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    text: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const addComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, date, text } = formData;
    if (name && date && text) {
      const newComment: Comment = { name, date, text, replies: [] }; 
      setFormData({ name: '', date: '', text: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };
  
  const replyToComment = (index: number) => {
    const replyText = prompt('Enter your reply');
    if (replyText !== null) {
      const currentDate = new Date().toLocaleDateString(); // Get current date
      const newReply: Comment = { 
        name: formData.name, 
        date: currentDate, 
        text: replyText, 
        replies: [] // Initialize replies array
      };
      const updatedComments = [...comments];
      updatedComments[index].replies.push(newReply);
      setComments(updatedComments);
    }
  };

  return (
    <div>
      <div className="container-fluid contact-main-section py-5">
        <div className="container">
          <div className="row py-5">
            <div className="align-item-center">
              <h1 className="text-light fw-bold mb-4 text-center mt-3">
                Latest News Single
              </h1>
              <p className="text-light mb-4 text-center mt-3">
                Hath after appear tree great fruitful green dominion
                <br /> moveth sixth abundantly image that midst
                <br /> of god day multiply you’ll which
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4 py-4">
        <div className="row">
          <div className="col">
            <img src={blog1} className="img-fluid" style={{ width: '100%' }} />
            <h2 className="mt-2">How To Wear Bright Shoes</h2>
            <span className="text-danger">Admin</span> 20 mar 2020
            <span className="text-danger"> lifestyle, travel</span>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              vitae placeat ad architecto nostrum asperiores vel aperiam, veniam
              eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque
              veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Odio vitae ab doloremque accusamus sit, eos
              dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Quod, facere.
            </p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              illo deserunt necessitatibus quibusdam sint, eos explicabo tenetur
              molestiae vero facere, aspernatur sit mollitia perferendis
              reiciendis. Deleniti magni explicabo sed alias fugit amet animi
              molestias ipsum maiores. Praesentium sint, id laborum quos.
              Tempora inventore est, dolor corporis quis doloremque nostrum, eos
              velit culpa quasi labore. Provident laborum porro nihil iste,
              magnam officia nemo praesentium autem, libero vel officiis. Omnis
              pariatur nam voluptatem voluptate at officia repellat ea beatae
              eligendi? Mollitia error saepe, aperiam facere. Optio maiores
              deleniti veritatis eaque commodi atque aperiam, debitis iste alias
              eligendi ut facilis earum! Impedit, tempore.
            </p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex error
              esse a dolore, architecto sapiente, aliquid commodi, laudantium
              eius nemo enim. Enim, fugit voluptatem rem molestiae. Sed totam
              quis accusantium iste nesciunt id exercitationem cumque
              repudiandae voluptas perspiciatis, consequatur quasi, molestias,
              culpa odio adipisci. Nesciunt optio fugiat iste quam modi, ex
              vitae odio pariatur! Corrupti explicabo at harum qui doloribus,
              sit dicta nemo, dolor, enim eum molestias fugiat obcaecati autem
              eligendi? Nisi delectus eaque architecto voluptatibus, unde sit
              minus quae quod eligendi soluta recusandae doloribus, officia,
              veritatis voluptatum eius aliquam quos. Consectetur, nisi?
              Veritatis totam, unde nostrum exercitationem tempora suscipit,
              molestias, deserunt ipsum laborum aut iste eaque? Vitae delectus
              dicta maxime non mollitia? Sapiente eos a quia eligendi deserunt
              repudiandae modi molestias tenetur autem pariatur ullam itaque,
              quas eveniet, illo quam rerum ex obcaecati voluptatum nesciunt
              incidunt culpa provident illum soluta. Voluptas possimus nesciunt
              inventore perspiciatis neque fugiat, magnam natus repellendus
              praesentium eum voluptatum, alias incidunt, tempora reprehenderit
              recusandae et numquam itaque ratione dolor voluptatibus in commodi
              ut! Neque deserunt nostrum commodi dolor natus quo, non vitae
              deleniti, vero voluptatem error aspernatur veniam expedita numquam
              amet quia in dolores velit esse molestiae! Iusto architecto
              accusantium quisquam recusandae quod vero quia.
            </p>
            <h6 className="text-danger fw-bold">Share this post</h6>
            <hr />
            <div className="row p-3 ">
                        <div className="col-1">  <FontAwesomeIcon icon={faFacebook} size="lg" color="#1DA1F2" className=" FontAwesomeIcon-chef"/></div>
                        <div className="col-1"><FontAwesomeIcon icon={faLinkedin} size="lg" color="#007bff" className=" FontAwesomeIcon-chef"/></div>
                        <div className="col-1"> <FontAwesomeIcon icon={faTwitter} size="lg" color="#1DA1F2" className=" FontAwesomeIcon-chef" /></div>
                      </div>
                   
          </div>
        </div>
        <h3>Comment </h3>
        {comments && comments.map((comment, index) => (
        <div key={index} className="comment">
          <div className="comment-details">
            <div className="comment-name">{comment.name}</div>
            <div className="comment-text">{comment.text}</div>
            <div className="text-danger mt-2">{comment.date}</div>
            <button className='btn btn-danger' onClick={() => replyToComment(index, formData.name)}>Reply</button>
            
            {comment.replies.map((reply, replyIndex) => (
              <div key={replyIndex} className="reply">
                <div className="reply-details">
                  <div className="reply-name">{reply.name}</div>
                  <div className="reply-text">{reply.text}</div>
                  <div className="text-danger mt-2">{reply.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
      <div className="container">
        <form onSubmit={addComment}>
          <div className="row gy-4 gy-xl-5 p-xl-5">
            <div className="col-6">
              <label htmlFor="fullname" className="form-label">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control border-zinic-400"
                id="username"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-6 col-md-6">
              <label htmlFor="date" className="form-label">
                Date <span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <input
                  type="Date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Message <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="message"
                name="text"
                rows="3"
                value={formData.text}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="p-4">
            <button className="btn btn-danger btn-lg" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Blog;