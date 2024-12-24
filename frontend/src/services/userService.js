class UserService {
    // Dummy data for user authentication (replace with actual API calls later)
    static users = [
        { email: "user1@example.com", password: "password123" },
        { email: "user2@example.com", password: "password456" },
    ];

    // Simulate user login
    static async login(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = this.users.find(
                    (user) => user.email === email && user.password === password
                );
                if (user) {
                    resolve({ success: true, message: "Login successful!" });
                } else {
                    reject({ success: false, message: "Invalid credentials!" });
                }
            }, 500); // Simulates network delay
        });
    }

    // Simulate user registration
    static async register(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const existingUser = this.users.find((user) => user.email === email);
                if (existingUser) {
                    reject({ success: false, message: "User already exists!" });
                } else {
                    this.users.push({ email, password });
                    resolve({ success: true, message: "Registration successful!" });
                }
            }, 500); // Simulates network delay
        });
    }
}

export default UserService;