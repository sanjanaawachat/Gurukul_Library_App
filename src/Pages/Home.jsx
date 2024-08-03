import React, { useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Lottie from 'react-lottie';
import BasicExample from '../Components/Table'
import library_lottie from '../Assets/99349-girl-with-books.json'
const Home = () => {
    if(JSON.parse(localStorage.getItem('data'))==null ) {
        console.log('kuch nahi')
        localStorage.setItem('data', JSON.stringify([]))
    } else {
         console.log('kuch hain');
    }
    const bookname = useRef("");
    const author = useRef("");
    const coding = useRef("Coding");
    const cooking = useRef("Cooking");
    const adventure = useRef("Adventure");
    const [bookdata, setBookdata] = useState(JSON.parse(localStorage.getItem('data'))); 
    let type = ""


    console.log('problem 1')
    const [data, setData] = useState({});
    const formsubmit = (e) => {

        if (cooking.current.checked) {
            type = "Cooking"
        }
        else if (coding.current.checked) {
            type = "Coding"
        }
        else {
            type = "Adventure"
        }

        e.preventDefault();
        
        if (bookname.current.value.length > 2 && author.current.value.length > 2) {
            setBookdata([...bookdata, {
                bookname: bookname.current.value,
                author: author.current.value,
                type: type
            }])
            localStorage.setItem('data', JSON.stringify([...JSON.parse(localStorage.getItem('data')), {
                bookname: bookname.current.value,
                author: author.current.value,
                type: type
            } ]))
        }
        else {
            console.log('enter values')
        }
        e.target.reset();
    }
   
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: library_lottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <>
                <div className='container' style={{padding:"64px"}}>
                    <h2 className='text-center text-secondary '> GuruKul Library 📖🤷‍♀️🎉</h2>
                    <hr />

                    <div className='w-100 formshere '>
                        <Form className='w-50' onSubmit={(e) => { formsubmit(e) }}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Book name</Form.Label>
                                <Form.Control type="type" placeholder="Harry potter" ref={bookname} />
                                <Form.Text className="text-muted">
                                    We'll never share your book with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" placeholder="J. K. Rowling" ref={author} />
                            </Form.Group>

                        
                            <div className="btn-group">
                                <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" ref={cooking} />
                                <label className="btn btn-secondary" htmlFor="option1">Cooking</label>

                                <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" ref={coding} />
                                <label className="btn btn-secondary" htmlFor="option2">Coding</label>

                                <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" ref={adventure} />
                                <label className="btn btn-secondary" htmlFor="option3">Adventure</label>
                            </div>

                            <br />
                            <br />
                            <Button variant="warning" type="submit">
                                Submit
                            </Button>
                            <br /><br />
                        </Form>
                        <Lottie
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />
                    </div>
                    <BasicExample data={bookdata}/>

                </div>
        </>
    )
}
export default Home;