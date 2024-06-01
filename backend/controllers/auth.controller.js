export const signup = async (req, res) => {
    try{
        const {fullName, username,password, confirmPassword,gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({message: "Passwords do not match"});
        }

        const newUser = new User.findOne({username});

        if(user){
            return res.status(400).json({message: "User already exists"});
        }

        //HASH PASSWORD HERE
        //http://avatar-placeholder.iran.run/avtar/200/200/any
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username={username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username={username}`

        const newuser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === "male"? boyProfilePic : girlProfilePic,

        });

        await newUser.save();

        res.startus(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            gender: newUser.gender,
            profilePic: newUser.profilePic,
        });
    
    }catch (error){
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
};

export const login = (req, res) => {
    console.log("loginUser");
}

export const logout = (req, res) => {
    console.log("logoutUser");
}

