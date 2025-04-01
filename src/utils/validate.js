export function checkValidData(name, email, password, confirmPassword, isSignIn) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!isSignIn) { 
        if (!name || name.trim().length < 3) {
            return "Name must be at least 3 characters long.";
        }
        
        if (!email || !emailRegex.test(email)) {
            return "Enter a valid email address.";
        }
        
        if (!password || password.length < 6) {
            return "Password must be at least 6 characters long.";
        }
        
        if (password !== confirmPassword) {
            return "Passwords do not match.";
        }
    } else {
        if (!email || !emailRegex.test(email)) {
            return "Enter a valid email address.";
        }
        
        if (!password) {
            return "Password cannot be empty.";
        }
    }
    
    return true; 
}
