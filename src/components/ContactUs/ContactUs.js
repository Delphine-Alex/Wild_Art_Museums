import React, { Component } from 'react';
import './ContactUs.css';
import logoTwitter from './assets/twitter.png';
import logoFacebook from './assets/facebook.png';
import logoLinkedin from './assets/linkedin.png';
import logoInstagram from './assets/instagram.png';
import logoMap from './assets/map.png';
import logoEmail from './assets/email.png';
import logoPhone from './assets/telephone.png';

const MAX_LENGTH = 150;
class ContactUs extends Component {
  constructor (props) {
    super(props);
    this.state = {
      FirstName: '',
      LastName: '',
      Mail: '',
      Phone: '',
      message: '',
      character: ''
    };

    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangemessage = this.handleChangemessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
  }

  handleChange (event) {
    if (event.target.value.length <= MAX_LENGTH) {
      this.setState({ message: event.target.value });
    }
  }

  handleChangeFirstName (event) {
    this.setState({ FirstName: event.target.value });
  }

  handleChangeLastName (event) {
    this.setState({ LastName: event.target.value });
  }

  handleChangeMail (event) {
    this.setState({ Mail: event.target.value });
  }

  handleChangePhone (event) {
    this.setState({ Phone: event.target.value });
  }

  handleChangemessage (event) {
    this.setState({ message: event.target.value });
  }

  render () {
    const maximumReached = this.state.message.length >= MAX_LENGTH;
    const numRemaining = MAX_LENGTH - this.state.message.length;

    return (
            <div className="fullpage1">
            <div>
                <div className="ContactUs">
                    <div className="contact-information">
                      <ul className="text-justify">
                        <li className="title-justify list-justify">Contact Information</li>
                        <li className="first-text-justify">Fill up the form and our Team will get back to you within 24 hours.</li>
                <li className="list-justify"><img className="logo " src={logoMap} />44 rue Alphonse Penaud,<br />75020 Paris</li>
                <li className="list-justify"><img className="logo" src={logoEmail} />paris@wildcodeschool.com</li>
                <li className="list-justify"><img className="logo" src={logoPhone} />+33 (0)7 84 39 08 74</li>
                      </ul>
                <div className="logo-bar">
                <a href="https://twitter.com/WildCodeSchool?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noreferrer" alt="Twitter Wild Code School">
                  <img className="network-logo" src={logoTwitter} alt="logo twitter" />
                  </a>
                <a href="https://fr-fr.facebook.com/WildCodeSchool/" rel="noreferrer" target="_blank" alt="Facebook Wild Code School">
                  <img className="network-logo" src={logoFacebook} alt="logo Facebook" />
                  </a>
                <a href="https://www.linkedin.com/school/wild-code-school/" rel="noreferrer" target="_blank" alt="Linkedin Wild Code School">
                  <img className="network-logo" src={logoLinkedin} alt="logo Linkedin" />
                </a>
                <a href="https://www.instagram.com/wildcodeschoolofficial/?hl=fr" rel="noreferrer" target="_blank" alt="Instagram Wild Code School">
                  <img className="network-logo" src={logoInstagram} alt="logo Instagram" />
                </a>
                    </div>
                    </div>
                    <div className="formulaire-content">
                    <form className="formulaire">
                        <label className="row1" htmlFor="FirstName">First Name</label>
                        <label className="row1" htmlFor="LastName" >Last Name</label>
                        <input autoComplete="off" id="First Name" type="text" value={this.state.FirstName} onChange={this.handleChangeFirstName} />
                        <input autoComplete="off" id="Last Name" type="text" className="element-4" value={this.state.LastName} onChange={this.handleChangeLastName} />
                        <label htmlFor="Mail" className="element-5">Mail</label>
                        <label htmlFor="Phone" className="element-6">Phone : </label>
                        <input autoComplete="off" id="Mail" type="text" className="element-7" value={this.state.Mail} onChange={this.handleChangeMail} />
                        <input autoComplete="off" id="Phone" type="text" className="element-8" value={this.state.Phone} onChange={this.handleChangePhone} />
                        <label htmlFor="message" className="element-9">message : </label>
                        <textarea
                        className={maximumReached ? 'length-maximum-reached' : 'length-ok'}
                        id="message"
                        type="text"
                        value={this.state.message}
                        onChange={this.handleChangemessage}
                        />
                        <small className="element-11">{numRemaining} remaining characters</small>

                            <button type="submit" value="Sendmessage" className="element-12" >Send message</button>
                    </form>
                    </div>
            </div>
            </div>
            <div className="Location">
            </div>
            </div>
    );
  }
}

export default ContactUs;
