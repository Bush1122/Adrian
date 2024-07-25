import React, { useState } from 'react';



import Rating from './Rating';
interface Comment {
    name: string;
    date: string;
    text: string;
    rating: number;
    replies: Comment[];
    
  }

  const dummyComments: Array<Comment> = [
    {
      name: 'Carole Marvin.',
      date: '17-5-2024',
      text: 'Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea lupta definitionem.',
      rating: 5, 
      replies: [],
      
    },
    {
      name: 'Carole Marvin.',
      date: '17-5-2024',
      text: 'Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea lupta definitionem.',
      rating: 2, 
      replies: [],
    

    },
   
  ];


const Productreview = ({ value, max }) => {


   // const [showDescription, setShowDescription] = useState(false);
   const [showAdditional, setShowAdditional] = useState(false);
  const[showReview , setShowReview] = useState(false);
    const [comments , setComments]     =useState(dummyComments)
    const [submitted, setSubmitted] = useState(false);

    const [activeSection, setActiveSection] = useState(null);

    const initialFormData = {
        name: '',
        date: '',
        text: '',
        rating: 0,
      };


    const [formData, setFormData] = useState(initialFormData );
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const addComment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, date, text, rating } = formData;

        if (name && date && text && rating) {
          const newComment: Comment = { name, date, text, rating ,replies: [] };
          try {
          
     

          setComments([...comments, newComment]);
          setFormData(initialFormData);
          setSubmitted(true)

        } catch (error) {
            console.error('Error submitting comment:', error);
            // Handle submission error
          }
        } else {
          alert('Please fill in all fields.');
        }
      };
     
      



        const handleReset = () => {
            setFormData(initialFormData);
            setSubmitted(false);
           
          };
        










      

    return (
        <div className='container mt-3 p-4'>
            <div className='row'>
            <div className={`col border border-dark p-4 text-center ${activeSection === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveSection('description')}>
                  Description
                </div>


                <div className={`col border border-dark p-4 text-center ${activeSection === 'additional' ? 'active' : ''}`}
                  onClick={() => setActiveSection('additional')}>Additional Information</div>
                 
               
              
               
                <div className={`col border border-dark p-4 text-center ${activeSection === 'review' ? 'active' : ''}`}
                 onClick={() => setActiveSection('review')}>Review</div>
                
                {activeSection === 'description' && (
                    <div className='description mt-4 p-4'>
                        <p className='fw-bold'>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                        </p>
                        <h3 className='mt-2 p-2'>Product Features</h3>
                        <ul>
                            <li>Mapped with 3M™ Thinsulate™ Insulation [40G Body / Sleeves / Hood]</li>
                            <li>Embossed Taffeta Lining</li>
                            <li>DRYRIDE Durashell™ 2-Layer Oxford Fabric [10,000MM, 5,000G]</li>
                        </ul>
                    </div>
                )}
                {activeSection === 'additional' && (
                    <div className=' additiona  Additional_Information mt-4 p-4'>
                        <div className='row'>
                            <div className='col'>
                                <h5>Weight:</h5>
                            </div>
                            <div className='col'>
                                <p>400 g</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <h5>Dimensions:</h5>
                            </div>
                            <div className='col'>
                                <p>10 x 10 x 15 cm</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <h5>Materials:</h5>
                            </div>
                            <div className='col'>
                                <p>60% cotton, 40% polyester</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <h5>Color:</h5>
                            </div>
                            <div className='col'>
                                <p>Blue, Gray, Green, Red, Yellow</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <h5>Size:</h5>
                            </div>
                            <div className='col'>
                                <p>L, M, S, XL, XXL</p>
                            </div>
                        </div>
                    </div>
                )}



              {activeSection === 'review' && (
                <div className='container mt-4 p-4'>
                    <div className='row'>
                        <div className='col'>
       
                        {comments && comments.map((comment, index) => (
                          
                                 <div key={index} className="comment">
                                     <div className="comment-deatail">
                                       <div className="comment-name">
                                       <p>{comment.name}</p>
                                       </div>
                                       <div className="comment-name">
                                       <p>{comment.text}</p>
                                       </div>
                                       <div className="comment-name">
                                       <p>{comment.date}</p>
                                       </div>
                                       <div className="comment-name">
                                       <p>{comment.img}</p>
                                       </div>
                                       <div className="comment-name">
                                       <Rating value={comment.rating} max={5} />
                                       </div>
                                
                                </div>
                         </div>
                             
                            ))}
                    </div>

                    <div className='col'>
                    {!submitted ? (
                      <form onSubmit={addComment}>
                      <div className="row ">
                        <h4 className='text-center mb-4'>Product Review</h4>
                      <div className="col-12 mb-3">
                     
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder='Enter Your Name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-12 mb-3">
                
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        placeholder='Enter Date'
                        value={formData.date}
                        onChange={handleInputChange}
                        
                        required
                      />
                    </div>


                      <div className="col-12 mb-3">
    
                      <textarea
                       type="text"
                        className="form-control"
                        id="text"
                        name="text"
                        rows="3"
                        placeholder='Enter Your comments'
                        value={formData.message}
                        onChange={handleInputChange}
                        
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 mb-3">
                    <select
                      className="form-control"
                      id="rating"
                      name="rating"
                      value={formData.rating}
                      onChange={handleInputChange}
                     
                      required
                    >
                      <option value="0">Select Rating</option>
                      <option value="1">1 Star</option>
                      <option value="2">2 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="5">5 Stars</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit Review</button>
                  </div>




                     </div>
                    </form>
                      ) : (
                        <div className="alert alert-danger" role="alert">
                          <p>Submit Your Reviews...</p>
                          <button className="btn btn-danger" onClick={handleReset}>Send Another Message</button>
                        </div>
                      )}
                      </div>

                    </div>

                </div>
              )}
            </div>
        </div>
    );
}

export default Productreview;
