import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";

export default function Home() {
  return (
    <div>
      <div className="home-bg">

      </div>

      <div className="home-intro">
        <h2>Introduction</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at turpis
          in tellus consectetur aliquet ac vitae eros. Vestibulum faucibus
          sapien consectetur fermentum ornare. Proin a accumsan erat, sit amet
          vestibulum turpis. Phasellus auctor lobortis diam, sed scelerisque
          nulla vehicula sit amet. Suspendisse potenti. Morbi venenatis
          scelerisque lacinia. Morbi vulputate urna id purus efficitur, tempus
          sodales eros congue. Sed eu massa nibh. Suspendisse vel nisi a felis
          maximus tincidunt. Nullam rhoncus ipsum nulla, vitae egestas nisl
          maximus eu. Donec fringilla arcu nisl, quis scelerisque velit aliquet
          id. Donec a enim volutpat, suscipit sapien vitae, ornare nibh. Sed
          tempus erat at arcu fringilla viverra. Pellentesque sed dui mattis,
          iaculis tellus id, dignissim sem. Proin facilisis ligula ut neque
          placerat condimentum. Vivamus consequat, neque nec suscipit
          condimentum, justo sapien vestibulum purus, ac aliquet libero nisi nec
          nulla.
        </p>
      
        <div class="video-container">
          <iframe src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}
