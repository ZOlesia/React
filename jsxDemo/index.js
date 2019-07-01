function getNum(){

    return Math.floor(Math.random() * 10) + 1;

}

class NumPicker extends React.Component{
    render(){
        const num = getNum();
        let msg;

        msg = num === 7 ? <div><h2>Congrats!</h2><img src="https://www.rkaink.com/wp-content/uploads/2019/03/Boom-Yes-GIF-downsized_large.gif"/></div> : <p>YOu lost</p>;
        
        return(

            <div>
                <h1>Number is: {num} </h1>
                {/* {num === 7 ? <img src="https://www.rkaink.com/wp-content/uploads/2019/03/Boom-Yes-GIF-downsized_large.gif"/> : 'Unlucky'} */}
                {/* {num === 7 && <img src="https://www.rkaink.com/wp-content/uploads/2019/03/Boom-Yes-GIF-downsized_large.gif"/>} */}

                {msg}
            </div>
            
        );
    }
}


ReactDOM.render(<NumPicker/>, document.getElementById('root'));


//behind the scene --> return React.createElement("h3", null, "Hello");