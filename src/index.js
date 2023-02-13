//1. Import Area
//1.1 import {someNamedImport} from somelibrary/somelocation
//1.2 import someDefaultImport from somelibrary/somelocation
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

//2. Function definition area.
// There are two way to access React Component-
//1.1- React Functional Component
//1.2- React Class component

// Every Component have it's own data,The data can be-
//1.1 Within Component
//1.2 Outside Component
let G = (props) => {
  //every function return something.
  return (
    <>
      <h1>{props.headingG}</h1>
      <p>{props.paragraphG}</p>
      <img src={props.imageG} alt='' />
    </>
  )

}

class F extends Component {// <--- This is Inheritance property of OOPS.
  //There are three member of a class.
  //1. Property
  paragraphF = "Senior MP Congress leaders said that Kamal Nath prayed at the temple for the party’s victory in the assembly elections expected to be held in late 2023.BHOPAL/SAGAR: Madhya Pradesh Congress president Kamal Nath on Monday met the controversial self-styled godman Dhirendra Shastri at Bageshwar Dham in Chhatarpur district. Shastri, the chief priest of Bageshwar Dham that attacts a large number of devotees, has advocated that India should be a “hindu rashtra”, and has also raised eyebrows with his large congregations where it is alleged that he furthers superstition by “granting wishes.”Kamal Nath met Shastri for close to two hours after reaching Bageshwar Dham in MP’s Gada village a helicopter.  ";

  headG = "On visit to Kathmandu, foreign secy Vinay Kwatra reviews India-Nepal partnership";
  paraG = "Foreign secretaries of the two countries “reviewed the wide-ranging India-Nepal partnership and agreed to further strengthen their economic and development cooperation.NEW DELHI: Foreign secretary Vinay Kwatra and his Nepal counterpart Bharat Raj Paudyal reviewed the bilateral partnership and agreed to strengthen economic and development cooperation for the benefit of the region at a meeting in Kathmandu on Monday.";
  imgG = "https://www.hindustantimes.com/ht-img/img/2023/02/13/550x309/Foreign-secretary-Vinay-Kwatra-called-on-the-Nepal_1676300114711.jpg";

  //2. Constructor (Constructor is nothing but a special method which is used to initialize a newly created variable/ object.)

  //3. Method

  // "Class" must have  a render method.
  render() {
    // Every method return something
    return (
      <React.Fragment>
        <h1>{this.props.headingF}</h1>
        <p>{this.paragraphF}</p>
        <img src={this.props.imageF} alt='' />
        <h3>{this.props.children}</h3>


        <G headingG={this.headG} paragraphG={this.paraG} imageG={this.imgG} />
      </React.Fragment>
    )
  }

}

function E(props) {
  const headE = "Ashok Gehlot's ‘offer’ to Modi a day after PM taunts over Rajasthan Budget gaffe";


  const headF = "As Kamal Nath meets Bageshwar Dham’s Dhirendra Shastri, BJP takes a swipe";
  const imgF = "https://www.hindustantimes.com/ht-img/img/2023/02/13/550x309/-Twitter-ANI-Hindinews-_1676298613164.jpg";
  //every Function return something
  return (
    <>
      <h1>{headE}</h1>
      <p>{props.paragraphE}</p>
      <img src={props.imageE} alt='' />

      <F headingF={headF} imageF={imgF} > Note- This is Note accessed from content area of F component</F>
    </>
  )
}

class D extends Component {//<--- This is inheritance property of OOPS.
  // There are three member of a class-
  //1.1- Property
  paraD = "Rahul Gandhi questioned why parts of his speech in Parliament during the budget session were removed, but no words were expunged from Narendra Modi's speech in which he allegedly insulted the Congress leader.Congress leader Rahul Gandhi on Monday launched a scathing attack on Narendra Modi over his alleged link with multi-billionaire Gautam Adani and said the prime minister “thinks that he is very powerful, but he doesn't realise that the absolute last thing that I am scared of is Narendra Modi”.Gandhi also questioned why parts of his speech in Parliament during the budget session were removed, but no words were expunged from the PM's speech in which he allegedly insulted the Congress leader.";


  paraE = "Speaking to news agency PTI, Gehlot said he rectified his mistake within “34 seconds”, and claimed that the BJP is rattled by his government’s performance in the state that goes to the polls this year-end.A day after Prime Minister Narendra Modi took a dig at Rajasthan chief minister Ashok Gehlot over his state budget gaffe, the latter on Monday offered to send him a copy of the same, saying it was a “model” for others to follow. Modi on Sunday picked on a blunder made by Gehlot at the Rajasthan Budget presentation – when he mistakenly read an old budget speech before being interrupted – and taunted the Congress for lacking vision.";
  imgE = "https://www.hindustantimes.com/ht-img/img/2023/02/13/550x309/Rajasthan-chief-minister-Ashok-Gehlot---PTI-_16721_1672103313960_1676297100379_1676297100379.jpg"

  //1.2 Constructor-(Constructor is nothing but a special method which is used to initialize a newly created variable/ object etc.)

  //1.3- Method
  // a "Class" must have  a render method.
  render() {
    // every method return something
    return (
      <React.Fragment>
        <h1>{this.props.headingD}</h1>
        <p>{this.paraD}</p>
        <img src={this.props.imageD} alt='' />
        <h3>{this.props.children}</h3>

        <E paragraphE={this.paraE} imageE={this.imgE} />
      </React.Fragment>
    )
  }
}


let C = (props) => {
  const headingC = "Hindenburg-Adani row: Centre agrees to committee set up by SC to strengthen regulatory regime";


  const headD = "'PM Modi's hands were shaking and…': In Wayanad, Rahul Gandhi rakes up Adani issue";
  const imgD = "https://www.hindustantimes.com/ht-img/img/2023/02/13/550x309/PTI02-13-2023-000204B-0_1676295555289_1676295555289_1676295579016_1676295579016.jpg";
  //every function return something
  return (
    <>
      <h1>{headingC}</h1>
      <p>{props.paragraphC}</p>
      <img src={props.imgC} alt='' />;

      <D headingD={headD} imageD={imgD} >Note- This Note is accessed from content area of D component</D>
    </>
  )
}
class B extends Component {// <---- This is inheritance property of OOPS.
  // There are three member of a 'Class'-
  //1. Property
  paraC = "Hindenburg-Adani row: The Supreme Court asked the Centre to submit a note on the proposed terms of reference by Wednesday. The next hearing will be on Friday.The Centre on Monday agreed to a committee to be set up by the Supreme Court for strengthening the regulatory regime following the Hindenburg-Adani episode. It, however, added that the remit of the panel has to be very specific so that it doesn't affect the flow of money and investments.";
  imageC = "https://www.hindustantimes.com/ht-img/img/2023/02/13/550x309/adani_hindenburg_1676246492747_1676285453364_1676285453364.jpg"
  //2. Constructor (Constructor is nothing but a special method/function of a class which is used to initialize the newly created variable or object )
  //3. Method

  // Every 'Class' component must have a render method
  render() {
    // every method/ function return something
    const { headingB, paragraphB, imgB } = this.props

    return (
      <React.Fragment>
        <h1>{headingB}</h1>
        <p>{paragraphB}</p>
        <img src={imgB} alt='' />
        <h3>{this.props.children}</h3>


        <C paragraphC={this.paraC} imgC={this.imageC} />
      </React.Fragment>
    )
  }

}

function A(props) { //<----This is Classical way of defining a Function.
  //Every Function return something
  let title = "This is project 5th- In this Project I'am using props to move data from one component to other"
  let headingA = "Mamata Banerjee's salvo at BJP over Amartya Sen; claims BSF ‘unleashed terror’"
  const headB = "Retail inflation climbs to 3-month high of 6.52% in January";
  const paraB = "Retail inflation figures: The inflation rate based on the Consumer Price Index (CPI) stood at 5.72 per cent December and 6.01 per cent in January 2022.Retail inflation breached the RBI's comfort zone and rose to a three-month high of 6.52 per cent in January, mainly on account of a spike in food prices, as per government data released on Monday.";
  let imageB = "https://www.hindustantimes.com/ht-img/img/2023/02/13/550x309/rupee_vs_dollar_1675660052337_1676259312646_1676290110210_1676290110210.jpg";
  return (
    <>
      <h1>{title}</h1>
      <br />
      <h1>{headingA}</h1>
      <p> {props.paragraphA}</p>
      <img src={props.imgA} alt='' />


      <B headingB={headB} paragraphB={paraB} imgB={imageB} >Note- This note is accessed from content area of B component</B>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const para = "Speaking in the state assembly Mamata Banerjee said the country should strive to bring in a peoples government to end anarchy West Bengal chief minister Mamata Banerjee on Monday hit out at the Bharatiya Janata Party BJP for “insulting” Nobel laureate Amartya Sen and reiterated her call to defeat it in the 2024 Lok Sabha elections, reported news agency PTI."
let imageA = "https://www.hindustantimes.com/ht-img/img/2023/02/13/550x309/PTI02-01-2023-000329B-0_1676283060021_1676283060021_1676283078850_1676283078850.jpg"
root.render(<A paragraphA={para} imgA={imageA} />);

//3.Export Area
// We can export anything like- Function,Class, Variabl,Array etc.
//There are two ways to export React components-
//3.1 Defalt Export
//3.2 Named Export