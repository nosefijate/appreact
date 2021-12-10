const Header = () =>{
    return (
    <header>
        <div>
            <h1> Duna </h1>
        </div>
        <nav class="navbar navbar-expand-sm navbar-light" >
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#opciones">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="opciones"> 
                        <ul class="header__nav__estilo">
                            <li> 
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Productos</a>
                            </li>
                            <li>
                                <a href="#">Medios de pagos</a>
                            </li>
                            <li>
                                <a href="#">Carrito</a>
                            </li>
                        </ul> 
                        <span className="material-icons">
                            shopping_cart
                        </span>
                    </div> 
                </nav>
    </header>
    
)};

export default Header