import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyAilqogV4GJ6SzOLGy28wjxSRVMYdhfazQ",
  authDomain: "saifulislam-c94ba.firebaseapp.com",
  projectId: "saifulislam-c94ba",
  storageBucket: "saifulislam-c94ba.appspot.com",
  messagingSenderId: "975798636000",
  appId: "1:975798636000:web:90688405a06e16be3a6f85"
};

// Firebase initialize
const app = initializeApp(firebaseConfig);

const RegisterForm = () => {
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    coordinatorName: ''
  });

  const HandleRegister = async (e) => {
    e.preventDefault();
    const { name, mobile, email, password, confirmPassword, dob, coordinatorName } = formData;

    if (password !== confirmPassword) {
        setRegistrationStatus('Passwords do not match');
        return;
    }

    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // User signed up successfully
        const user = userCredential.user;

        // Save user data to Firestore
        const db = getFirestore();
        const userRef = await addDoc(collection(db, 'users'), {
            name: name,
            mobile: mobile,
            email: email,
            dob: dob,
            coordinatorName: coordinatorName
        });        

        setRegistrationStatus('User signed up successfully!');
        // Reset form data after successful registration
        setFormData({
            name: '',
            mobile: '',
            email: '',
            password: '',
            confirmPassword: '',
            dob: '',
            coordinatorName: ''
        });
    } catch (error) {
        // An error occurred during sign-up
        const errorMessage = error.message;
        setRegistrationStatus(errorMessage);
    }
}

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="hero min-h-screen bg-base-200 flex justify-center items-center">
      <div className="card w-full lg:max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-5xl font-bold text-center mb-8">Register Now!</h1>
          <form onSubmit={HandleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input name="name" type="text" placeholder="Name" className="input input-bordered" required value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile Number</span>
              </label>
              <input name="mobile" type="tel" placeholder="Mobile Number" className="input input-bordered" required value={formData.mobile} onChange={handleInputChange} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="Email" className="input input-bordered" required value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type="password" placeholder="Password" className="input input-bordered" required value={formData.password} onChange={handleInputChange} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input name="confirmPassword" type="password" placeholder="Confirm Password" className="input input-bordered" required value={formData.confirmPassword} onChange={handleInputChange} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date of Birth</span>
              </label>
              <input name="dob" type="date" className="input input-bordered" required value={formData.dob} onChange={handleInputChange} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Co-ordinator Name</span>
              </label>
              <input name="coordinatorName" type="text" placeholder="Co-ordinator Name" className="input input-bordered" required value={formData.coordinatorName} onChange={handleInputChange} />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">Register</button>
            </div>
          </form>
          {registrationStatus && <p className={registrationStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}>{registrationStatus}</p>}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
