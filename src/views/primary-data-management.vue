<template>
  <div class="pdm-container">
    <div class="top-container">
      <div class="logo">
        <img src="../assets/vedas.png" alt="vedas logo" />
      </div>
      <div class="user">
        <img class="user-button" src="../assets/userbg.png" alt="user-image" />
      </div>
    </div>
    <div class="mid-container">
      <div class="heading">
        <h1>Primary Data Mangement</h1>
      </div>
      <div class="back">
        <button @click="$router.push('/ridam')">
          <img src="../assets/left-arrow.png" alt="back" />
          <p class="text-back">back</p>
        </button>
      </div>
      <div class="form-containers">
        <div class="form-container-1">
          <FormContainerOne
         
          ref="formContainerOne"
           :theme="Theme"
          :subtheme="Subtheme"
          :basepath="BasePath"
          @validate-and-proceed="handleValidationAndProceed"
        />
        </div>
        <div class="form-container-2">
          <FormContainerTwo v-if="showFormContainerTwo " :theme="selectedTheme" :subtheme="selectedSubtheme" @validate-and-proceed-second-form="FormTwoHandleValidationAndProceed" />
        </div>
        <div class="form-container-3">
          <FormContainerThree v-if="showFormContainerThree" @validate-and-proceed-form-three="FormThreeHandleValidationAndProceed"/>
        </div>
        <div class="form-container-4">
          <FormContainerFour v-if="showFormContainerFour" @validate-and-proceed-form-four="FormFourHandleValidationAndProceed"/>
        </div>
        <div class="form-container-5">
          <FormContainerFive v-if="showFormContainerFive" @validate-and-proceed-form-five="FormFiveHandleValidationAndProceed" />
        </div>
        <div class="form-container-6">
          <FormContainerSix v-if="showFormContainerSix" @validate-and-proceed-form-six="FormSixHandleValidationAndProceed"/>
        </div>
        <div class="form-container-7">
          <FormContainerSeven v-if="showFormContainerSeven" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormContainerOne from "../components/FormContainerOne.vue";
import FormContainerTwo from "../components/FormContainerTwo.vue";
import FormContainerThree from "../components/FormContainerThree.vue";
import FormContainerFour from "../components/FormContainerFour.vue";
import FormContainerFive from "../components/FormContainerFive.vue";
import FormContainerSix from '../components/FormContainerSix.vue'
import FormContainerSeven from "../components/FormContainerSeven.vue";

export default {
  data() {
    return {
      showFormContainerTwo: true,
      showFormContainerThree: true,
      showFormContainerFour: true,
      showFormContainerFive: true,
      showFormContainerSix: true,
      showFormContainerSeven: true,
      Theme: "",
      Subtheme: "",
      BasePath: "",
      selectedSubtheme: "",
      selectedTheme: ""
    };
  },
  name: "primary-data-management",
  components: {
    FormContainerOne,
    FormContainerTwo,
    FormContainerThree,
    FormContainerFour,
    FormContainerFive,
    FormContainerSix,
    FormContainerSeven,
  },
  methods: {
    handleValidationAndProceed(subtheme, theme) {
      this.selectedSubtheme = subtheme;
      this.selectedTheme = theme;
      this.showFormContainerTwo = true;
    },
    FormTwoHandleValidationAndProceed() {
      this.showFormContainerThree = true;
    },
    FormThreeHandleValidationAndProceed() {
      this.showFormContainerFour = true;
    },
    FormFourHandleValidationAndProceed(){
      this.showFormContainerFive = true;
    },
    FormFiveHandleValidationAndProceed(){
      this.showFormContainerSix = true;
    },
    FormSixHandleValidationAndProceed(){
      this.showFormContainerSeven = true;
    }
  }
};
</script>
<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  
}

.top-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  
  padding: 0;
  background: inherit;
  display: flex;
  justify-content: space-between;
}

.logo {
  margin-right: 20px; /* Add some spacing between the logo and other content */
  position: fixed;
}

.logo img {
  margin-left: 20px;
}

.user-button {
  width: 80px;
  margin: 33px;
  border-radius: 50%; /* Add rounded corners */
  box-shadow: 0px 1px 5px rgb(94, 77, 77);
  position: fixed;
  right: 0
}

.user-button:hover {
  box-shadow: 0px 0px 0px rgb(94, 77, 77);
  cursor: pointer;
  z-index: 20;
}

.pdm-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(
    to right,
    #c3e5f9,
    #bae1f6,
    #b0dcf3,
    #a6d8f0,
    #9cd4ed,
    #93d1eb,
    #89cde8,
    #7fcae6,
    #73c6e4,
    #67c2e3,
    #59bee1,
    #49bae0
  ); /* Gradient background */
}

button img {
  width: 30px;

  margin-top: 5px;
}



.mid-container{
  z-index: 999;
  padding-top: 169px ;
}

.form-containers{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 100px;
}

button {
  display: flex;
  justify-content: space-between;
  width: 90px;
  margin: 33px;
  border-radius: 50px; /* Add rounded corners */
  box-shadow: 0px 1px 5px rgb(94, 77, 77);
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
