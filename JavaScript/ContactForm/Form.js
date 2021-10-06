<html>
  <head>
    <meta charset="UTF-8" />
    <script>
      class ContactForm {
        constructor(el) {
          this.element = el || null;
          this.action = el.action;
          this.fields = Object.keys(el.elements).reduce((obj, key) => {
            if (key === el.elements[key].id) obj[key] = el.elements[key];
            return obj;
          }, {});
          console.log('Contact Form:', this);
        }

        init() {
          this.element.addEventListener('submit', (event) =>
            this.onSubmit(event)
          );
        }

        onSubmit(event) {
          event.preventDefault();
          this.element.classList.remove('contact-form--errors');
          this.element.classList.remove('contact-form--sent');
          this.element.classList.add('contact-form--loading');
          this.sendFormData(this.getFormData())
            .then((response) => {
              if (response.status === 200) {
                return response.json().then((res) => this.onSent(res));
              } else {
                throw 'An error occured while submitting the form';
              }
            })
            .catch((err) => this.onError(err));
        }

        onSent(response) {
          for (
            let i = 0;
            i < this.element.querySelectorAll('div').length;
            i++
          ) {
            this.element.querySelectorAll('div')[i].classList.add('is-hidden');
          }

          let successElement = document.createElement('div');
          successElement.innerHTML = `Message sent successfully`;
          this.element.appendChild(successElement);

          this.element.classList.remove('contact-form--loading');
          this.element.classList.add('contact-form--sent');
          console.log('Sent:', response.success);
        }

        onError(err = '') {
          this.element.classList.remove('contact-form--loading');
          this.element.classList.add('contact-form--errors');
          console.error('Error:', err);
        }

        sendFormData(data = {}) {
          return new Promise((resolve, reject) => {
            console.log('Send Data:', data);
            fetch(this.action, {
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
              body: JSON.stringify(data),
            })
              .then((response) => resolve(response))
              .catch((err) => reject(err));
          });
        }

        getFormData() {
          let formData = {},
            values = [];

          Object.keys(this.fields).forEach((key) => {
            switch (this.fields[key].type) {
              case 'checkbox':
              case 'radio': {
                formData[key] = this.fields[key].checked;
                break;
              }
              case 'select-one': {
                if (
                  !this.fields[key][this.fields[key].selectedIndex].disabled
                ) {
                  formData[key] =
                    this.fields[key][this.fields[key].selectedIndex].value;
                } else {
                  formData[key] = '';
                }
                break;
              }
              case 'select-multiple': {
                Object.keys(this.fields[key].options).forEach((i) => {
                  if (
                    this.fields[key].options[i].selected &&
                    !this.fields[key].options[i].disabled
                  ) {
                    values.push(this.fields[key].options[i].value);
                  }
                });
                formData[key] = values.length > 0 ? values.join(', ') : '';
                break;
              }
              default: {
                formData[key] = this.fields[key].value;
                break;
              }
            }
          });
          return formData;
        }
      }

      // Create a new instance of the ContactForm class
      const form = new ContactForm(document.querySelector('.contact-form'));

      // Initialise our instance of the ContactForm class when document has loaded
      window.onload = (event) => form.init();
    </script>
    <style>
      html {
        font-family: sans-serif;
        font-size: 100%;
        line-height: 1.5;
        background-color: #f8f8f8;
        color: #3d3d3d;
      }

      body {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        min-height: 100vh;
        font-size: 1rem;
      }

      .form {
        & > div {
          & ~ div {
            margin-top: 20px;
          }
          &.is-hidden {
            display: none;
          }
        }
        &-label {
          display: inline-block;
          margin-bottom: 5px;
          font-size: 0.875rem;
          font-weight: 700;
        }
        &-control {
          display: block;
          width: 100%;
          padding: 10px;
          font: 0.875rem/1.5 sans-serif;
          color: #333;
          background-color: #fff;
          border: 1px solid #bbb;
          border-radius: 4px;
          box-sizing: border-box;
        }
      }

      .contact-form {
        width: 100%;
        max-width: 568px;
        padding: 40px;
        background-color: #fefefe;
        border-radius: 4px;
        box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.125);
        box-sizing: border-box;

        &--loading {
          opacity: 0.5;
          pointer-events: none;
        }
        &--errors {
        }
        &--sent {
          & > div ~ div {
            margin: 0;
          }
        }
      }

      .button {
        appearance: none;
        padding: 5px 10px;
        font: 0.875rem/1.5 sans-serif;
        background-color: #ddd;
        border: 1px solid transparent;
        border-radius: 4px;
        cursor: pointer;
        box-sizing: border-box;
      }
    </style>
  </head>
  <body>
    <form class="form contact-form">
      <div>
        <label class="form-label" for="name">Name</label>
        <input
          class="form-control"
          id="name"
          name="name"
          type="text"
          required
        />
      </div>
      <div>
        <label class="form-label" for="email">Email</label>
        <input
          class="form-control"
          id="email"
          name="email"
          type="email"
          required
        />
      </div>
      <div>
        <label class="form-label" for="subject">Subject</label>
        <select class="form-control" id="subject" name="subject" required>
          <option value="" selected disabled>Choose a Subject</option>
          <option value="subject-one">Subject One</option>
          <option value="subject-two">Subject Two</option>
          <option value="subject-three">Subject Three</option>
          <option value="subject-four">Subject Four</option>
          <option value="subject-five">Subject Five</option>
          <option value="subject-six">Subject Six</option>
        </select>
      </div>
      <div>
        <label class="form-label" for="message">Message</label>
        <textarea
          class="form-control"
          id="message"
          name="message"
          required
        ></textarea>
      </div>
      <div>
        <label class="form-label" for="subscribe">Subscribe?</label>
        <input class="" id="subscribe" name="subscribe" type="checkbox" />
      </div>
      <div>
        <button class="button" type="submit">Submit</button>
        <button class="button" type="reset">Clear</button>
      </div>
    </form>
  </body>
</html>
