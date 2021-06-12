<template>
  <div class="contact-page content-page">
    <b-img fluid src="../assets/banners/contact-banner.jpg" height="300px" class="banner d-block mb-2" />

    <HoursOfOperation class="mx-5 mb-4" />

    <p class="text-center mb-4">
      You may reach Ching Asian Bistro by telephone at <b>(615)595-9780</b>.
    </p>

    <b-form @submit="onSubmit">
      <b-form-group 
        id="name"
        label="Name"
        label-for="contact_form_name_input"
      >
        <b-form-input 
          id="contact_form_name_input"
          name="name"
          class="contact-form-input mx-auto"
          v-model="data.name"
          @change="onChange"
        />
        <b-alert v-if="errors.name" variant="danger">{{ errors.name }}</b-alert>
      </b-form-group>
      <b-form-group 
        id="email"
        label="Email"
        label-for="contact_form_email_input"
      >
        <b-form-input 
          id="contact_form_email_input"
          name="email"
          class="contact-form-input mx-auto"
          v-model="data.email"
          autocomplete="email"
          @change="onChange"
        />
        <b-alert v-if="errors.email" variant="danger">{{ errors.email }}</b-alert>
      </b-form-group>
      <b-form-group 
        id="phone"
        label="Phone"
        label-for="contact_form_phone_input"
      >
        <b-form-input 
          id="contact_form_phone_input"
          name="phone"
          class="contact-form-input mx-auto"
          v-model="data.phone"
          autocomplete="tel"
          @change="onChange"
        />
        <b-alert v-if="errors.phone" variant="danger">{{ errors.phone }}</b-alert>
      </b-form-group>
      <b-form-group 
        id="reason"
        label="Reason for Comment"
        label-for="contact_form_reason_input"
      >
        <b-form-select
          id="contact_form_reason_input"
          name="reason"
          class="contact-form-input mx-auto"
          v-model="data.reason"
          :options="contactReasonOptions"
          @change="onChange"
        />
        <b-alert v-if="errors.reason" variant="danger">{{ errors.reason }}</b-alert>
      </b-form-group>
      <b-form-group 
        id="comments"
        label="Comments"
        label-for="contact_form_comments_input"
      >
        <b-form-textarea
          id="contact_form_comments_input"
          name="comments"
          class="contact-form-input mx-auto"
          v-model="data.comments"
          @change="onChange"
        />
        <b-alert v-if="errors.comments" variant="danger">{{ errors.comments }}</b-alert>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-alert v-if="sentSuccess" variant="success" class="my-3">Message sent!</b-alert>
      <b-alert v-if="sentError" variant="danger" class="my-3">Error sending message.</b-alert>

    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import Joi from "joi-browser";
import { HoursOfOperation } from "../components";

export default {
  name: "Contact",
  components: {
    HoursOfOperation,
  },
  data() {
    return {
      data: {
        name: "",
        email: "",
        phone: "",
        reason: "praise",
        comments: ""
      },
      errors: {},
      sentSuccess: false,
      sentError: false,
      contactReasonOptions: [
        { value: "question", text: "Question" },
        { value: "suggestion", text: "Suggestion" },
        { value: "praise", text: "Praise" },
        { value: "other", text: "Other" },
      ],
      schema: {
        name: Joi.string()
          .required()
          .min(1)
          .max(50)
          .label("Name"),
        email: Joi.string()
          .required()
          .min(1)
          .max(100)
          .email()
          .label("Email"),
        phone: Joi.string()
          .allow("")
          .min(0)
          .max(20)
          .label("Phone Number"),
        reason: Joi.string()
          .min(0)
          .max(20)
          .label("Reason for Comment"),
        comments: Joi.string()
          .required()
          .min(1)
          .max(1000)
          .label("Comments")
      },
    }
  },
  methods: {
    onChange({ currentTarget: input }) {
      const errorMessage = this.validateProperty(input);

      this.data[input.name] = input.value;

      if (errorMessage) this.errors[input.name] = errorMessage;
      else delete this.errors[input.name];

      this.showSuccess = false;
    },
    onSubmit(e) {
      e.preventDefault();

      const errors = this.validate();
      this.errors = errors || {};
      if (errors) return;

      axios.post("/api/contact.php", this.state)
        .then(response  => {
          const { data } = response;
          if (data.sent) {
            this.sentSuccess = true;
            this.sentError = false;
            this.clearInput();
          } else {
            this.sendError = true;
          }
        })
        .catch(() => {
          this.sendError = true;
        });
    },
    clearInput() {
      this.data = {
        name: "",
        email: "",
        phone: "",
        reason: "praise",
        comments: ""
      };
      this.errors = {};
    },
    validate() {
      const options = { abortEarly: false };
      const { error } = Joi.validate(this.state.data, this.schema, options);
      if (!error) return null;

      const errors = {};
      for (let item of error.details) {
        errors[item.path[0]] = item.message;
      }
      return errors;
    },
    validateProperty({ name, value }) {
      const obj = { [name]: value },
      schema = { [name]: this.schema[name] },
      { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
  }
}
</script>

<style scoped>
.contact-form-input {
  max-width: 400px;
}
</style>