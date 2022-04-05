import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold pb-2 border-b-2 border-slate-500 inline-block'>Conceptual Question & Answer</h1>
            </div>
            <div className='mx-8 my-4'>
                <p className='text-2xl font-medium'>
                    Q1: What is Context API ?</p>
                <p className='text-xl'>
                    Ans: Context API is the alternative way of "props drilling". With the help of Context API we can pass any kinds of data or function etc. in any children element. Amazing thing is that, we can pass "info" in any child layer without sending the "info" to every layer as props. Normally, if we want to pass data from parent to child or grandchild and so on; we have to pass the data in every layer as props. But, with the help of Context API, we just set a context in parent element and then we can extract the data from any child by using "useContext" hook.
                </p>
            </div>
            <div className='mx-8 my-4'>
                <p className='text-2xl font-medium'>
                    Q2: What is Semantic tag ?</p>
                <p className='text-xl'>
                    Ans: Semantic tags are those kinds of tags which describe the purpose of using the element and what kinds of data it contains in it. It helps the system as well as developer to read html file and understand what kinds of information the tag contains. Semantic are parts of HTML5. Here are some example of semantic tags: "header", "footer","main", "nav", "section", "article" tag etc.
                </p>
            </div>
            <div className='mx-8 my-4'>
                <p className='text-2xl font-medium'>
                    Q3: Inline, Block & Inline-block element.</p>
                <p className='text-xl'>
                    Ans: <br />
                    <span className='font-medium'>Block:</span> Block elements are those html elements which make a new line for every element. Block elements take full width of a line. Example: header, h1-6, li, ol, p, div, article tag etc.
                    <br />
                    <span className='font-medium'>Inline:</span> Inline elements are those elements which does not break a line. Inline element take only as much width it's need. Example: a, button, small, span, input, strong tag etc.
                    <br />
                    <span className='font-medium'>Inline-Block:</span> Inline-block elements are similar as inline elements. But, these elements can have margin, padding in each of its side. To make an inline element as inline-block we just have to declare it's display property as display: inline-block;

                </p>
            </div>
        </div>
    );
};

export default Blogs;