import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className=" container m-5">
      <h5>
        Add two more routes. one route will be blogs. You will need to answer at
        least three questions on the blog page. This won't protected route. We
        recommend answering all four questions.
      </h5>
      <ol>
        <li>
          <h3>Difference between javascript and nodejs?</h3>
          <ul>
            <p>
              <strong>JavaScript</strong>
            </p>
            <li>
              Javascript is a programming language that is used for writing
              scripts on the website.
            </li>
            <li>Javascript can only be run in the browsers.</li>
            <li>It is basically used on the client-side.</li>
            <li>
              Javascript is capable enough to add HTML and play with the DOM.
            </li>
            <li>
              Javascript can run in any browser engine as like JS core in safari
              and Spidermonkey in Firefox.
            </li>
          </ul>
          <br />
          <ul>
            <p>
              <strong>NodeJS</strong>
            </p>
            <li>NodeJS is a Javascript runtime environment.</li>
            <li>
              We can run Javascript outside the browser with the help of NodeJS.
            </li>
            <li>It is mostly used on the server-side.</li>
            <li>Nodejs does not have capability to add HTML tags.</li>
            <li>
              V8 is the Javascript engine inside of node.js that parses and runs
              Javascript.
            </li>
          </ul>
        </li>
        <br />
        <li>
          <h3>When should you use nodejs and when should you use mongodb?</h3>
          <p>
            NodeJS is a JavaScript runtime environment. It's actually helps
            JavaScript to run outside of server. It's used in server side
            development. But, MongoDB is NoSQL database which is document
            oriented. It represents data as of JSON documents. It's used for
            store data. You are building a website and you need a database to
            store the data or information so here you can use MongoDB but to be
            connected with MongoDB you need a connector, so here you can use
            NodeJS which will help your website to run outside of server.
          </p>
        </li>
        <li>
          <h3>Differences between SQL and NOSQL databases.</h3>
          <ol>
            <li>
              <strong>SQL</strong> databases are relational,{" "}
              <strong>NOSQL</strong> databases are non-relational.
            </li>
            <li>
              <strong>SQL</strong> databases use structured query language and
              have a predefined schema. <strong>NOSQL</strong> databases have
              dynamic schemas for unstructured data.
            </li>
            <li>
              <strong>SQL</strong> databases are vertically scalable, while{" "}
              <strong>NOSQL</strong> databases are horizontally scalable.
            </li>
            <li>
              <strong>SQL</strong> databases are table-based, while{" "}
              <strong>NOSQL</strong> databases are document, key-value, graph,
              or wide-column stores.
            </li>
            <li>
              <strong>SQL</strong> databases are better for multi-row
              transactions, while <strong>NOSQL</strong>
              is better for unstructured data like documents or JSON.
            </li>
          </ol>
        </li>
        <li>
          <h3>What is the purpose of jwt and how does it work</h3>
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued. JSON stands for
            JavaScript Object Notation and is a text-based format for
            transmitting data across web applications. It stores information in
            an easy-to-access manner, both for developers and computers. It can
            be used as a data format by any programming language and is quickly
            becoming the preferred syntax for APIs, surpassing XML.
          </p>
          <p>
            JWTs are used as a secure way to authenticate users and share
            information. Typically, a private key, or secret, is used by the
            issuer to sign the JWT. The receiver of the JWT will verify the
            signature to ensure that the token hasn’t been altered after it was
            signed by the issuer. It is difficult for unauthenticated sources to
            guess the signing key and attempt to change the claims within the
            JWT. Not all signing algorithms are created equal though. For
            example, some signing algorithms use a secret value that is shared
            between the issuer and the party that verifies the JWT. Other
            algorithms use a public and private key. The private key is known
            only to the issuer, while the public key can be widely distributed.
            The public key can be used to verify the signature, but only the
            private key can be used to create the signature. This is more secure
            than a shared secret because the private key only needs to exist in
            one place. Because of this, the server does not need to keep a
            database with the information needed to identify the user. For
            developers, this is great news — the server that issues the JWT and
            the server that validates it do not have to be the same.{" "}
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Blog;
