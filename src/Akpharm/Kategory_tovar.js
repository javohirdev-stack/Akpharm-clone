
import Header from "./Header";
import Popular from "./Popular";
import Kategory_tovar_page from "./Kategory_tovar_page";
import Message from "./Message";
import Footer from "./Footer";
const Kategory_tovar = () => {
    return (
        <>
            <main id="main_page_scrol" className="main-page">
                <div className="opacitybac">

                    <div className="container-fluid">
                        <div className="row">
                            <Header />
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-10 text-center ">
                                <h1 className="main_text">Каталог товаров в Akpharm
                                </h1>
                            </div>
                        </div>
                    </div>

                </div>

            </main>

            <Kategory_tovar_page />
            <div className="row">

                <Popular />
                <Message />

            </div>
            <Footer />
        </>
    );
}
export default Kategory_tovar;