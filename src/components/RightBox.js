import React from 'react';
import Google from '../assets/google.png';
import Apple from '../assets/apple.png';
import Loader from '../assets/loader.png';

const RightBox = ({ formData, handleChange, handleSubmit, signIn }) => {
  return (
    <div
      style={{
        // border: '1px solid red',
        width: '50%',
        minHeight: '100vh',
        backgroundColor: 'rgb(231 231 231 / 43%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '400px',
        }}
      >
        <TitleContainer />
        <SocialContainer />
        <FormContainer
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          signIn={signIn}
        />
        <RegisterContainer />
      </div>
    </div >
  )
}

const TitleContainer = () => {
  return (<div
    style={{
      // border: '1px solid red',
      width: '100%',

    }}
  >
    <div
      style={{
        fontFamily: 'Montserrat',
        fontSize: '36px',
        fontWeight: '700',
        lineHeight: '44px',

      }}
    >Sign In</div>
    <div
      style={{
        fontFamily: 'Lato',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '19px',
        marginTop: '5.49px',
      }}
    >Sign in to your account</div>
  </div >)
}

const SocialContainer = () => {
  const social = [
    {
      icon: Google,
      alt: 'google',
      content: 'Sign in with Google',
      width: '15.37px',
      height: '15.37px',
      marginLeft: '10.98px'
    },
    {
      icon: Apple,
      alt: 'apple',
      content: 'Sign in with Apple',
      width: '12.62px',
      height: '15.37px',
      marginLeft: '11.53px'
    }
  ]
  return (<div
    style={{
      // border: '1px solid blue',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '28.54px',
    }}
  >
    {
      social.map((el, index) => (<div
        key={index}
        style={{
          backgroundColor: '#fff',
          width: '197.6px',
          height: '32.93px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          marginLeft: index === 1 ? '27.44px' : '0px',
        }}
      >
        <img
          src={el.icon}
          alt={el.alt}
          width={el.width}
          height={el.height}
        />
        <span
          style={{
            fontFamily: 'Montserrat',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '15px',
            marginLeft: el.marginLeft,
          }}
        >{el.content}</span>
      </div>))
    }
  </div >)
}

const FormContainer = ({ formData, handleChange, handleSubmit, signIn }) => {
  return (<div
    style={{
      backgroundColor: '#fff',
      width: '100%',
      height: '347.99px',
      borderRadius: '20px',
      marginTop: '27.44px',
      marginBottom: '21.96px',
      padding: '32.93px',
    }}
  >
    <form
      onSubmit={handleSubmit}
      style={{
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{}}>
        <div
          style={{
            fontFamily: 'Lato',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '19px',
            marginBottom: '10.98px',

          }}
        >Email address</div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            border: 'none',
            width: '100%',
            height: '43.91px',
            borderRadius: '10px',
            backgroundColor: '#EAEAEA',
            fontFamily: 'Lato',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '19px',
            padding: '0 16.47px',

          }}
        />

      </div>
      <div style={{}}>
        <div
          style={{
            fontFamily: 'Lato',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '19px',
            marginBottom: '10.98px',

          }}
        >Password</div>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            border: 'none',
            width: '100%',
            height: '43.91px',
            borderRadius: '10px',
            backgroundColor: '#EAEAEA',
            fontFamily: 'Lato',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '19px',
            padding: '0 16.47px',
          }}
        />

      </div>
      <div
        style={{
          // border: '1px solid black',
          fontFamily: 'Lato',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '19px',
          color: '#346BD4',
          cursor: 'pointer',
        }}>Forgot password?</div>
      <button
        style={{
          height: '43.91px',
          backgroundColor: '#605BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',

          fontFamily: 'Montserrat',
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '20px',

          cursor: 'pointer',
        }}
        type="submit"
        disabled={signIn.signBtn}
      >
        {
          signIn.signBtn
          ? <img src={Loader} alt="loader-icon" style={{ width: '19px', height: '19px' }} />
          : 'Sign In'
        }
      </button>
    </form >
  </div >)
}

const RegisterContainer = () => {
  return (<div
    style={{
      // border: '1px solid blue',
      width: '286.51px',
      margin: '0 auto',
      fontFamily: 'Lato',
      fontSize: '16px',
      fontWeight: 400,
      textAlign: 'center',
      color: '#858585',
    }}
  >Don't have an account? <span
    style={{
      color: '#346BD4',
      cursor: 'pointer',
    }}
  >Register here</span>
  </div>)
}

export default RightBox
