import "./Help.css";

export default function Help() {
  return (
    <div className="Help">
      <h1>So ya need a bit of help, eh?</h1>
      <div className="help-container">
        <h2>Making your account</h2>
        <p>
          Welcome to the store! <br />
          Before you can start buying things with us at Saunders' superstore,
          you'll want to make an account! <br />
          Just press the "sign up" link at the top right of your page to
          register with us. After this, you'll be taken to the log in page,
          where you'll need to enter your details to continue browsing!
          <br />
          If you've had your fill of fantastic products, you can log out at any
          time by navigating to your profile icon in the top right, and clicking
          "log out" in the dropdown menu!
        </p>

        <h2>Browsing products</h2>
        <p>
          Browsing products here is easy!
          <br />
          Simply enter what you're looking for into the search bar to be taken
          to it's category page, or alternatively navigate to the "Home" page
          using the link in the header, or by clicking the store logo!
          <br />
        </p>

        <h2>Buying products</h2>
        <p>
          Once you've made your way to a product you like the look of, you can
          add it to your cart by first selecting a quantity (the higher the
          better), and then by clicking "Add to cart". <br />
          You should now see your cart appear to the right hand side of the
          screen!
          <br />
          The cart isn't just a pretty face though, because from here, you can
          edit the quantity of items you'd like, remove it from the cart, and
          select your shipping options before purchasing! <br />
          If you'd like a clearer look at your items however, you can click
          "View Cart" at the top of the sidebar, or alternatively click your
          profile image in the top right, and then "view cart" in the dropdown
          menu.
        </p>
      </div>
    </div>
  );
}
