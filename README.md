# ShopifyAPI
Setting up your Node.js

This is a test to pull data for orders using the Shopify API 
This File uses Node.js so you will need to make sure you set it up, You can download it from: https://nodejs.org/en/download/
my version: Version: 14.17.5 (includes npm 6.14.14)
I have used the following for the Shopify API node https://www.npmjs.com/package/shopify-api-node,
To set it up, please type in the terminal: npm install --save shopify-api-node
Ensure you set up csv-writer: https://www.npmjs.com/package/csv-writer?__cf_chl_captcha_tk__=pmd_huJ_.S7rl2xBKxsRkBG0fAO5Dam3n45bK8QFbL3V98o-1630368712-0-gqNtZGzNAtCjcnBszQjl
Type in terminal: npm install csv-writer

Setting up your Shopify


Please make sure you have some Unfulfilled orders before you run this as it pulls the unfulfilled orders
Please replace the following portion of code by your private app Information:
                shopName: '[Shop Name goes here]',
								apiKey: '[Private App API key goes here]',
								password: '[Private app password goes here]'
                
Note: once you run this code all orders will be fulfilled
