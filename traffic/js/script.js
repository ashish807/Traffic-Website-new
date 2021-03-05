if(window.SimpleSlide) {
  new SimpleSlide({
    slide: 'quote',
    time: 5000, 
  })
  
  new SimpleSlide({
    slide: 'portfolio',
    time: 5000,
    nav: true,
  })
}
if(window.SimpleAnime) {
  new SimpleAnime();
}


function play(content)
{
  if(content=="mapase")
  {
    swal({
      text: "कृपया कोठा नम्बर ५ मा जानु होस्, अनि त्यहाँ उपलब्द फारम भोर्नुहोस अनि इन्चार्जले भने बमोजिम प्रक्रिया पुरा गर्नु होस्  ।  एदी हजुर ट्राफिक जनचेतना कक्षा लगाउन आउनु भएको हो भने सार्बजनी बिदा छोडी अन्ने दिन बिहान १० देखि ११ बजे वा दिउसो १२ देखि १ वा  दिउसो २ देखि ३ बजे भित्र आउन सक्नुहुन्छ ।",
    });
    var audio = new Audio("../audio/mapase.mp3");
    audio.play();
  }
  else if(content=="lane")
  {
    swal({
      text: "कृपया कोठा नम्बर ५ मा जानु होस्, अनि त्यहाँ उपलब्द फारम भोर्नुहोस अनि इन्चार्जले भने बमोजिम प्रक्रिया पुरा गर्नु होस्  ।  एदी हजुर ट्राफिक जनचेतना कक्षा लगाउन आउनु भएको हो भने सार्बजनी बिदा छोडी अन्ने दिन बिहान ११  देखि दिउसो १२  बजे वा दिउसो १२ देखि १ वा  दिउसो ३  देखि ४  बजे भित्र आउन सक्नुहुन्छ ।",
    });
    var audio = new Audio("../audio/laneCrossing.mp3");
    audio.play();
  }
  else if(content=="park")
  {
    swal({
      text: "कृपया कोठा नम्बर ५ मा जानु होस्, अनि त्यहाँ उपलब्द फारम भोर्नुहोस अनि इन्चार्जले भने बमोजिम प्रक्रिया पुरा गर्नु होस्  ।  एदी हजुर ट्राफिक जनचेतना कक्षा लगाउन आउनु भएको हो भने सार्बजनी बिदा छोडी अन्ने दिन बिहान १० देखि ११ बजे वा दिउसो १२ देखि १ वा  दिउसो २ देखि ३ बजे भित्र आउन सक्नुहुन्छ ।",
    });
    var audio = new Audio("../audio/parking.mp3");
    audio.play();
  }

  
}
