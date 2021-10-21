<template>
  <div id="profile">
    <div class="container padding-bottom">
      <br />
      <br />
      <div class="row">
        <div class="col text-center">
          <b-img :src="profileImage" fluid class="img-circle"></b-img>
        </div>
      </div>
      <div class="padding-right padding-left">
        <br />
        <h3 class="text-align-left">Profile</h3>
        <div class="row">
          <div class="col-lg-4 text-align-left padding-bottom">
            <label>Name</label>
            <p class="border-bottom">{{ profile.name }}</p>
          </div>
          <div class="col-lg-4 text-align-left padding-bottom">
            <label>Birth day</label>
            <p class="border-bottom">{{ profile.birthDay }}</p>
          </div>
          <div class="col-lg-4 text-align-left padding-bottom">
            <label>Age</label>
            <p class="border-bottom">{{ profile.age }}</p>
          </div>
          <div class="col-lg-4 text-align-left padding-bottom">
            <label>Phone</label>
            <p class="border-bottom">{{ profile.phone }}</p>
          </div>
          <div class="col-lg-4 text-align-left padding-bottom">
            <label>Email</label>
            <p class="border-bottom">{{ profile.email }}</p>
          </div>
          <div class="col-lg-4 text-align-left padding-bottom">
            <label>Hobby</label>
            <p class="border-bottom">{{ profile.hobby }}</p>
          </div>
          <div class="col-lg-7 text-align-left padding-bottom">
            <label>Address</label>
            <p class="border-bottom">{{ profile.address }}</p>
          </div>
        </div>
      </div>
      <div class="padding-right padding-left">
        <br />
        <h3 class="text-align-left">Education</h3>
        <div class="row">
          <div class="col-lg-6 text-align-left padding-bottom">
            <label>Year</label>
            <p class="border-bottom">
              {{ education.year }} &nbsp;&nbsp; {{ education.degrees }}
            </p>
          </div>
          <div class="col-lg-4 text-align-left padding-bottom">
            <label>Major</label>
            <p class="border-bottom">{{ education.major }}</p>
          </div>
          <div class="col-lg-6 text-align-left padding-bottom">
            <label>Institute</label>
            <p class="border-bottom">{{ education.institute }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      profileImage: require("../assets/img/jane-image.png"),
      profile: {
        name: "CHENJIRA KHAMCHIANG",
        birthDay: "29/07/1995",
        age: "26",
        hobby: "Badminton , Practice english from netflix movie",
        address:
          "99/129 casavile village sukapiban5soi71 O Ngoen SaiMai district Bangkok 10220",
        phone: "0923873332",
        email: "chenjira.k95@gmail.com"
      },
      education: {
        year: "2014 - 2018",
        degrees: "Bachelor of Science",
        major: "Computer Science",
        institute: "King mongkut's university of technology\n" + "north bangkok"
      }
    };
  }
};
</script>
<style scoped>
label {
  font-weight: bold;
  padding-bottom: 10px;
  text-transform: uppercase;
}
#profile {
  background-color: #d7dbdd;
}
.container {
  background-color: white;
}
h3 {
  text-transform: uppercase;
  padding-top: 20px;
  padding-bottom: 10px;
  font-weight: bold;
  color: darkcyan;
}
html,
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto", sans-serif;
}
</style>
