<template>
  <div class="form-container-seven">
    <div class="white-container">
      <div class="heading">
        <h3>Citation</h3>
      </div>
      <div class="data-prepared-by">
        <label for="dpb" class="dpb-heading">Data Prepared by </label><br />
        <input type="text" id="dpb" v-model="dpb" @input="Validatedpb" />
        <i
          class="fa-solid fa-circle-check"
          id="tick"
          v-if="Correctdpb && dpb"
        ></i>
        <i
          id="cross"
          class="fa-solid fa-circle-xmark"
          v-if="!Correctdpb && dpb"
        ></i>
      </div>
      <div class="original-source">
        <label for="ogsc" class="og">Original Source</label> <br />
        <input type="text" id="og-sc" v-model="ogsc" @input="ValidateOgsc" /><i
          class="fa-solid fa-circle-check"
          id="tick-use-cs"
          v-if="CorrectOgsc && ogsc"
        ></i>
        <i
          id="cross-use-cs"
          class="fa-solid fa-circle-xmark"
          v-if="!CorrectUseOgsc && ogsc"
        ></i>
      </div>

      <div class="row">
        <div class="source-scale">
          <label for="source-scale">Source Scale</label><br />
          <input type="text" id="source-scale" /><i
            class="fa-solid fa-circle-check"
            id="tick-row"
            v-if="CorrectSourceScale && SourceScale"
          ></i>
          <i
            id="cross-row"
            class="fa-solid fa-circle-xmark"
            v-if="!CorrectUseSourceScale && SourceScale"
          ></i>
        </div>
        <div class="source-date">
          <label for="source-date">Source Date</label><br />
          <input type="date" id="source-date" />
        </div>
      </div>

      <div class="lineage">
        <label for="lineage" class="heading-lineage">Lineage</label><br />
        <input
          type="text"
          id="lineage-input"
          v-model="Lineage"
          @input="ValidateLineage"
        /><i
          class="fa-solid fa-circle-check"
          id="tick"
          v-if="CorrectLineage && Lineage"
        ></i>
        <i
          id="cross"
          class="fa-solid fa-circle-xmark"
          v-if="!CorrectLineage && Lineage"
        ></i>
      </div>
      <div class="coorperate-name">
        <label for="cn" class="heading-cn">Corporate Name</label><br />
        <input type="text" id="cn" v-model="cn" @input="ValidateCn" /><i
          class="fa-solid fa-circle-check"
          id="tick"
          v-if="CorrectCn && cn"
        ></i>
        <i
          id="cross"
          class="fa-solid fa-circle-xmark"
          v-if="!CorrectCn && cn"
        ></i>
      </div>
      <div class="coorperate-address">
        <label for="ad" class="heading-ad">Corporate Address</label><br />
        <input type="text" id="ad" v-model="ad" @input="ValidateAd" /><i
          class="fa-solid fa-circle-check"
          id="tick"
          v-if="CorrectAd && ad"
        ></i>
        <i
          id="cross"
          class="fa-solid fa-circle-xmark"
          v-if="!CorrectAd && ad"
        ></i>
      </div>
    </div>
    <div class="bottom-layer">
      <div class="steps">
        <span id="current-step">7</span> of <span id="total-steps">12</span>
      </div>
      <div class="move-icons">
        <i class="fa-solid fa-circle-chevron-left"></i>
        <i
          id="right"
          class="fa-solid fa-circle-chevron-left"
          @click="handleRightClick"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}

.bottom-layer {
  width: 100%;
  padding: 20px;
  text-align: center;
  font-size: 25px;
  padding-top: 30px;
  display: flex;
  gap: 15px;
  margin-left: 164px;
}

#right {
  transform: rotate(180deg);
  position: relative;
  left: 5px;
}

#current-step {
  background: linear-gradient(
    to bottom,
    #b2e2f1,
    #b2e2f1,
    #b2e2f1,
    #b2e2f1,
    #b2e2f1
  ); /* Gradient fill */
  padding: 15px 20px 12px 20px;
  border: none;
  border-radius: 16px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

input {
  background: linear-gradient(
    to bottom,
    #b2e2f1,
    #b2e2f1,
    #b2e2f1,
    #b2e2f1,
    #b2e2f1
  ); /* Gradient fill */
  color: #344747;
  font-size: 17px;
  border: none;
  border-radius: 50px;
  width: 528px;
  height: 41px;
  font-style: italic;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  text-indent: 22px;
  font-weight: 300;
  box-sizing: border-box;
  margin-left: 4px;
}

.white-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 56px;
  gap: 15px;
  background: linear-gradient(
    180deg,
    #b2e2f1,
    rgba(178, 226, 241, 0.5) 99.99%,
    rgba(178, 226, 241, 0)
  );
  box-shadow: 0px 4.4px 4.42px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(9.18px);
  box-sizing: border-box;
  width: 600px;
  padding-bottom: 25px;
  max-width: 100%;
}

#source-scale,
#source-date {
  width: 250px;
}

label {
  position: relative;
  right: 170px;
  margin-bottom: 15px;
}

.row label {
  right: 50px;
}

.heading {
  position: relative;
  right: 200px;
}

.lineage label {
  right: 210px;
}
</style>
