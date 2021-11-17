import React,{  useState } from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)
    
    return{
        bind:{
        value,
        onChange:event => setValue(event.target.value)
        },
       // ОСТАНОВИЛАСЬ ЗДЕСЬЬ ЗДЕСЬ МЫ НАХОИМСЯ СОЗДАНИЕ СОБСТВЕННОГО КУКА
  
    clear: () =>setValue(''),
    value: () => value
}
}



function AddTodo({onCreate}) {
   
    let style= {
        inputStyle: {
            marginBottom: '1rem',
            height: "30px",
            width: "400px",
          
            border: '2px solid white',
            borderRadius: '4px',
            background: '#722bba',
        
            boxShadow: "0 0 18px rgba(0,0,0,0.9)"
        },
        btn:{
            border: '2px solid white',
            borderRadius: '4px',
            height: "35px",
            marginLeft: "10px",
            width: '78px',
            background:'#8d4ff0',
            fontSize:'14px',
            fontWeight:'bold',
            whiteSpace: "nowrap ",
            boxShadow: "0 0 18px rgba(0,0,0,0.9)"


        }
    }

    const input  = useInputValue('')

    function sumbitHandler(event){
        event.preventDefault()
        

        if(input.value().trim()) {
            onCreate(input.value())
            input.clear()
            
        }
       
       
    }

    return(
        <form  onSubmit ={sumbitHandler} >
            <input {...input.bind} style= {style.inputStyle} />
            <button type ="sumbit" style={style.btn}>Add Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}



export default AddTodo