<template>
    <div class="w-full h-screen bg-[#001220] flex flex-col justify-center items-center">
            <div class="title w1/2 found ">
                <h1 class="text-[#1F3A93] text-[10em] p-0  mt-[0.5em] flex items-center">404 NOT</h1>
                <hr class="border-[1px] w-1/2 ml-[15.2em] mb-[3em] my-0 p-0">
                <h1 class="text-[#5BC8AC] text-[10em] ml-[2em] p-0 m-0">FOUND</h1>
            </div>

      <q-btn
        class="q-mt-xl btn"
        unelevated
        to="/"
        label="Go Home ⏎"
        no-caps
      />
    </div>
    
    
    <ul class="circles z-0">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</template>

<script setup>
defineOptions({
  name: 'ErrorNotFound'
});
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Poppins&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
        z-index: 999;
    }

    h1 {
        font-family: "Luckiest Guy", cursive;


    }

    .enlace::after {
        content: "";
        display: block;
        height: 2px;
        background-color: #5BC8AC;
        transform: scale(0, 1);
        transform-origin: center;
        transition: transform .25s;

    }

    .enlace:hover::after {
        transform: scale(1, 1);
    }
    .enlace{
        transition: all 300ms ease-in-out;
        
    }
    .circles{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
      }
        .circles li{
          position: absolute;
          display: block;
          list-style: none;
          width: 20px;
          height: 20px;
          background: rgba(92, 200, 172, 0.7);
          animation: animate 25s linear infinite;
          bottom: -150px;  
      }
      .circles li:nth-child(1){
          left: 25%;
          width: 80px;
          height: 80px;
          animation-delay: 0s;
      }
       
       
      .circles li:nth-child(2){
          left: 10%;
          width: 20px;
          height: 20px;
          animation-delay: 2s;
          animation-duration: 12s;
      }
       
      .circles li:nth-child(3){
          left: 70%;
          width: 20px;
          height: 20px;
          animation-delay: 4s;
      }
       
      .circles li:nth-child(4){
          left: 40%;
          width: 30px;
          height: 30px;
          animation-delay: 0s;
          animation-duration: 18s;
      }
       
      .circles li:nth-child(5){
          left: 65%;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
      }
       
      .circles li:nth-child(6){
          left: 75%;
          width: 30px;
          height: 30px;
          animation-delay: 3s;
      }
       
      .circles li:nth-child(7){
          left: 35%;
          width: 40px;
          height: 40px;
          animation-delay: 7s;
      }
       
      .circles li:nth-child(8){
          left: 50%;
          width: 25px;
          height: 25px;
          animation-delay: 15s;
          animation-duration: 45s;
      }
       
      .circles li:nth-child(9){
          left: 20%;
          width: 15px;
          height: 15px;
          animation-delay: 2s;
          animation-duration: 35s;
      }
       
      .circles li:nth-child(10){
          left: 85%;
          width: 50px;
          height: 50px;
          animation-delay: 0s;
          animation-duration: 11s;
      }
        @keyframes animate {
       
          0%{
              transform: translateY(0) rotate(0deg);
              opacity: 1;
              border-radius: 0;
          }
       
          100%{
              transform: translateY(-1000px) rotate(720deg);
              opacity: 0;
              border-radius: 50%;
          }
       
      }
      .triangle{
        border-top:60rem solid #fff;
        border-left:25rem solid transparent;
      }
      @keyframes flotar-y-rotar {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(0.7deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}

.found {
  animation: flotar-y-rotar 2s infinite ease-in-out;
}

.btn{
  background: #5BC8AC;
  color: #1F3A93 ;
  opacity: 0.7;
  transition: 300ms all ease-in-out;
}
.btn:hover{
  opacity: 1;
  transform: scale(1.1);
}

</style>
