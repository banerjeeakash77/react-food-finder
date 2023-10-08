


const  Header=(props)=>{
return (
  <div className={props.bgClass}> 
       <div className="text-contend">
       <h1 className="header-title">{props.title}</h1>
       {props.children}
       </div>

  </div>

)
}

export default Header;