* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  width: 100%;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  overflow-x: hidden !important;
  --color-1: rgb(112,10,10);
  --color-2: rgb(153,38,38);
  --color-2: #c35151;
  --btn-color: #ff9800;
}
.header, .main ,footer {
  overflow-x: hidden !important;
}
#map {
  width: 100%;
  height: 100%;;
}

/* HEADER */

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em;
  background-image: linear-gradient(45deg, var(--color-1), var(--color-2));
  z-index: 100000;
}
.brand {
  display: flex;
  flex-direction: row;
}
.logo {
  height: 60px;
}
.title {
  font-family: 'Tangerine', cursive;
  font-size: 3em;
  color: #fff;
  margin: 0.2em 0 0 0;
  align-items: center;
}
.hamburger-menu {
  color: #fff;
}
.hamburger-menu:hover {
  cursor: pointer;
  opacity: 0.7;
}
.main-nav {
  display: block;
  position: absolute;
  width: 150px;
  top: 110px;
  right: 0;
  background-color: #fff;
  transform: translateX(1000px);
}
.show {
  transform: translateX(0);
  transition: all 0.5s ease;
}
.main-nav ul li {
  padding: 1em;
  list-style-type: none;
  border-bottom: solid 1px var(--color-1); 
}
.main-nav ul li:last-child {
  border-bottom: none;
}
.main-nav ul li a {
  color: var(--color-1);
  text-decoration: none;
}
.main-nav ul li a:hover {
  color: var(--color-2);
}

/* HERO */

.hero {
  overflow: hidden;
}
.video {
  width: 100%;
  height: auto;
}

/* SECTION SUBSCRIBE */

main {
  margin-top: -4px;
}
.subscribe {
  width: 100%;
  background-image: linear-gradient(45deg, var(--color-1), var(--color-2));
  color: #fff;
  padding: 1em;
}
.subscribe-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.label {
  text-align: center;
}
.input-group {
  display: flex;
  flex-direction: column;
  padding: 1em;
}
.email {
  padding: 1em;
  border: none;
  border-radius: 10px;
}
.email:focus, .email:active {
  border: solid 3px var(--btn-color);
  border-radius: 10px;
  outline: none;
}
::placeholder {
  font-style: italic;
  font-size: 1em;
}
.submit {
  margin-top: 1em;
  padding: 1em;
  border: solid 1px #fff;
  border-radius: 10px;
  width: 60%;
  align-self: center;
  font-weight: bold;
  background-color: var(--btn-color);
}

/* SECTION ABOUT */

.heading {
  text-align: center;
  font-family: 'Tangerine', cursive;
  font-weight: 700;
  font-size: 2.5em;
  color: #fff;
  background: linear-gradient(rgba(112,10,10,0.8), rgba(153,38,38,0.8)), url('../img/background-small.jpg');
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  line-height: 5;
  box-shadow: 0 0 100px #000;
}

.about-container {
  width: 300px;
  margin: 1em auto;
  box-shadow: 0 0 20px #aaa;
  padding: 3em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.about-icon {
  text-align: center;
  color: var(--color-1);
  overflow: hidden;
}
.about-title {
  text-align: center;
  padding: 0.5em;
  border-bottom: solid 1px var(--color-1);
  font-family: 'Tangerine', cursive;
  font-size: 3em;
  font-weight: 700;
  line-height: 1;
}
.about-text {
  text-align: justify;
  padding-top: 2em;
}
.container {
  max-width: 1300px;
  margin: 1em auto;
  padding: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

/* SECTION PRODUCTS */

.product-container {
  width: 300px;
  box-shadow: 0 0 20px #aaa;
  border-radius: 10px;
  margin: 1em auto;
}
.product-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.product-title {
  text-align: center;
  font-family: 'Tangerine', cursive;
  font-weight: 700;
  font-size: 3em;
  padding: 0.3em;
  background-color: var(--color-1);
  color: #fff;
  margin-top: -4px;
}
.product-description {
  padding: 2em 1em;
  text-align: justify;
}
.product-price {
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
}
.product-select {
  text-align: center;
  display: block;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 1em 2em;
  margin-top: 1em;
  margin-bottom: 1em;
  background-color: var(--btn-color);
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 20px #aaa;
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
}

/* CONTACT SECTION */

.contact-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.contact-description {
  text-align: justify;
  padding: 1em;
  width: 100%;
}
.contact-details {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-left: 2em;
  margin-top: 0.5em;
}
.contact-details i {
  color: var(--color-1);
  width: 20%;
  align-self: right;
}
.contact-details div {
  width: 80%;
  align-self: left;
}

/* GOOGLE MAP */

#map {
  width: 100%;
  height: 53%;
  margin-top: 1em;
}

/* FOOTER */

.footer {
  align-items: center;
  width: 100%;
  padding: 2em;
  background-image: linear-gradient(45deg, var(--color-1), var(--color-2));
  color: #fff;
  text-align: center;
}
.copyright a {
  color: #fff;
  text-decoration: none;
}
.copyright a:hover {
  color: var(--btn-color);
}

/* Responsive Design for medium mobiles */

@media screen and (min-width: 360px) {
  .subscribe-form {
    margin: 1em;
  }
  .input-group {
    margin-top: 1em;
  }
  .submit {
    margin-top: 2em;
  }
  .heading {
    font-size: 3em;
    line-height: 4;
  }
  .about-container, .product-container, .product-image {
    width: 330px;
  }
}

/* Responsive design for tablets */

@media screen and (min-width: 768px) {
  .header {
    position: fixed;
    box-shadow: 0 0 300px #000;
  }
  .logo {
    height: 90px;
  }
  .title {
    font-size: 4em;
  }
  .hamburger-menu {
    display: none;
  }
  .main-nav {
    position: relative;
    width: auto;
    transform: translateX(0);
    background-color: rgba(112,10,10,0);
    top: 0;
    font-size: 1.5em;
    margin-top: 0.6em;
  }
  .main-nav ul li {
    display: inline;
    border: none;
  }
  .main-nav ul li a {
    color: #fff;
  }
  .video {
    margin-top: 5em;
  }
  .label {
    font-size: 1.5em;
    padding: 1em;
  }
  .input-group {
    width: 60%;
    margin: 1em auto;
  }
  .submit {
    width: 40%;
  }
  .heading {
    font-size: 4em;
    line-height: 3.4;
    background: linear-gradient(rgba(112,10,10,0.8), rgba(153,38,38,0.8)), url('../img/background-medium.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  #map {
    height: 40%;
  }
  .about-container, .product-container, .product-image {
    width: 340px;
  }
  .right {
    width: 50%;
    padding: 1em;
    margin: 0.5em;
  }
  .contact-container {
    margin-top: 1em;
  }
  .contact-description {
    display: block;
    margin: 1em;
    width: 40%;
  }
}
@media screen and (min-width: 1280px) {
  .about-container, .product-container, .product-image {
    width: 400px;
  }
  .heading {
    background: linear-gradient(rgba(112,10,10,0.8), rgba(153,38,38,0.8)), url('../img/background-large.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}