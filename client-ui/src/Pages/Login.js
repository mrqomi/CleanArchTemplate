import parllel from '../Assets/img/ParallaxBg.jpg'
import logo from '../Assets/img/LogoMain_Full.png'
import '../Assets/assets/css/bootstrap.min.css'
import '../Assets/assets/css/atlantis.min.css'
import '../Assets/css/site.css'
import './login.css'
import {useForm} from 'react-hook-form'
import { redirect, redirectDocument } from 'react-router-dom'
import Home from './Home'
export const Login = () => {
   
    const {register,handleSubmit}=useForm()
    const onLoginSubmit=(data)=>{
        localStorage.setItem("token","salam")
        console.log(data)
        window.location.replace("/")
    }
    return (
       
            <form onSubmit={handleSubmit(onLoginSubmit)}>
                 <div className='login'>
                <div className="set-bg wrapper wrapper-login wrapper-login-full p-0" style={{ backgroundImage: `url(${parllel})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "top center" }}>
                    <div className="login-aside w-50 d-flex flex-column align-items-center justify-content-center text-center ">

                        <img className="login-img" src={logo} />

                        <p className="subtitle text-white op-7"></p>
                    </div>
                    <div className="login-right login-aside w-50 d-flex align-items-center justify-content-center bg-dark-gradient text-white" style={{ direction: "rtl" }}>
                        <div className="container container-login container-transparent animated fadeIn">
                            <div className="login-form">
                                <div className="text-danger"></div>
                                <div className="form-group">
                                    <label className="placeholder text-white"><b>نام کاربری</b></label>
                                    <input type="text" className="form-control" style={{ marginTop: 0 }} placeholder="نام کاربری" {...register("userName")}/>   
                                    <span className="validationSpan"></span>
                                </div>
                                <div className="form-group">
                                    <label className="placeholder text-white"><b>کلمه عبور</b></label>
                                    <input type="password" className="form-control" style={{ marginTop: 0 }} maxLength="30" placeholder="رمز عبور" {...register("pass")}
                                        autoComplete="off" />
                                    <span  className="validationSpan"></span>

                                    <br />




                                    <div className="row">
                                        <img id="capimg" className="CaptchaVal col-5" /><button id="refreshCaptcha" type="button" className="fa fa-refresh"></button>
                                        <input className="form-control col-6" placeholder="کد امنیتی" {...register("captcha")}/>
                                    </div>

                                    <span className="validationSpan"></span>
                                </div>
                                <div className="form-group form-action-d-flex mb-3">
                                    <input type="submit" value="ورود" className="btn btn-primary btn-round col-md-5 float-right mt-3 mt-sm-0 fw-bold" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </form>
    )
}