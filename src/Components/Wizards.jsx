// import React, { useState } from 'react';
// import '../App.css'

// const Wizard = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = ['Form Tab', 'Text Tab', 'Image Tab', 'Video Tab'];

//   return (
//     <div className="wizard">
//       <div className="wizard-tabs">
//         {steps.map((step, index) => (
//           <button
//             key={index}
//             className={index === activeStep ? 'wizard-tab active' : 'wizard-tab'}
//             onClick={() => setActiveStep(index)}
//           >
//             {step}
//           </button>
//         ))}
//       </div>

//       <div className="wizard-content">
//         {activeStep === 0 && <div>Form Content</div>}
//         {activeStep === 1 && <div>Text Content</div>}
//         {activeStep === 2 && <div>Image Content</div>}
//         {activeStep === 3 && <div>Video Content</div>}
//       </div>
//     </div>
//   );
// };

// export default Wizard;



import React, { useState } from 'react';
import '../App.css';

const Wizard = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ['Form Tab', 'Text Tab', 'Image Tab', 'Video Tab'];

  return (
    <div className="wizard">
      <div className="wizard-tabs">
        {steps.map((step, index) => (
          <button
            key={index}
            className={index === activeStep ? 'wizard-tab active' : 'wizard-tab'}
            onClick={() => setActiveStep(index)}
          >
            {step}
          </button>
        ))}
      </div>

      <div className="wizard-content">
        {/* Form Tab */}
        {activeStep === 0 && (
          <div>
            <h2>Form Content</h2>
            <form>
              <label>
                Name: 
                <input type="text" name="name" />
              </label>
              <br />
              <label>
                Email: 
                <input type="email" name="email" />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}

        {/* Text Tab */}
        {activeStep === 1 && (
          <div>
            <h2>Text Content</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur odio eius numquam voluptate et, sapiente veritatis, mollitia doloribus similique quaerat consectetur. Assumenda dolores vero corrupti blanditiis iure aliquam beatae.
            </p>
          </div>
        )}

        {/* Image Tab */}
        {activeStep === 2 && (
          <div>
            <h2>Image Content</h2>
            <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c139a0b1b55d64b0a3414eff0e2182626ae97550ae938b77da8debb3cbe8724f._RI_.png" alt="Sample" style={{ maxWidth: '100%' }} />
          </div>
        )}

        {/* Video Tab */}
        {activeStep === 3 && (
          <div>
            <h2>Video Content</h2>
            <video width="400" controls>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wizard;
