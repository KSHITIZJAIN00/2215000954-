const axios = require('axios');
const { token, urls } = require('../config/apiConfig');
const fetchNumbers = async (id) => {
    const url = urls[id];
    if (!url) return [];
  
    try {
      console.log("Requesting with Token:", token);
      const response = await Promise.race([
        axios.get(url, { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTU1ODY3LCJpYXQiOjE3NDQ5NTU1NjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImE2ZWFiNmMyLTA2YzAtNDNiMi1iMGMyLWM2ZjQxNTc2ODFjZSIsInN1YiI6ImtzaGl0aXouamFpbl9jczIyQGdsYS5hYy5pbiJ9LCJlbWFpbCI6ImtzaGl0aXouamFpbl9jczIyQGdsYS5hYy5pbiIsIm5hbWUiOiJrc2hpdGl6IGphaW4iLCJyb2xsTm8iOiIyMjE1MDAwOTU0IiwiYWNjZXNzQ29kZSI6IkNObmVHVCIsImNsaWVudElEIjoiYTZlYWI2YzItMDZjMC00M2IyLWIwYzItYzZmNDE1NzY4MWNlIiwiY2xpZW50U2VjcmV0IjoiUVpzaFpDWFJzUkpBanB4dyJ9.9umXnG6Mw6xQ18uapvTc4QYNgUTIWHgobdfZNselfhs` } }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout')), 1000)
        ),
      ]);
  
      console.log("API Response:", response.data);
  
      if (response && response.data && response.data.numbers) {
        return response.data.numbers;
      } else {
        console.error("No valid numbers returned from API");
        return [];
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
      return [];
    }
  };
  
  
module.exports = { fetchNumbers };
