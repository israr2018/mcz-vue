<template>
 
<div class="container">
  <div class="jumbotron">
    <h1 class="display-4">Search Your Favorite Car</h1>
     <p class="lead">By Price and Car Make or Model</p>
    <div class="form-group row">

      <div class="col-lg-4 col-md-3 col-xs-12">
        <div class="form-group">
          <input id="car_make_model" class="form-control" type="text" placeholder="Car Makes or Car Models">
        </div>

      </div>
      <div class="col-lg-3 col-md-4 col-xs-12">
        <div class="form-group">

          <select id="price_range" class="form-control">
            <option >
            </option>


          </select>

        </div>
      </div>
      <div class="col-lg-2 col-md-3 col-xs-12">

        <input id="" class="form-control btn btn-secondary"
          type="button">
      </div>
      <div class="col-lg-2 col-md-3 col-xs-12">

        <input id="" class="form-control btn btn-secondary"  value="reset" type="button">
      </div>
    </div>
    <hr class="my-4">
    <div >
      <h2>Sorry, we could not find any car ads for the price range and car model that you entered</h2>
      <p> Suggestions:</p>
      <p>Make sure car make is spell correctly like toyota , vitz are spelled correctl.
        Try another price range.
        Try another car model.</p>



    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>
