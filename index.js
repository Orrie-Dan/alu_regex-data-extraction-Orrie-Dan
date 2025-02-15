// This is the data that's going to be tested
const Email = "d.nkusi@alustudent.com";
const Phone = "(250) 780-0000";
const Currency = "$4,345,000.00";
const Hashtag = "#BlackHistoryMonth";

// Regular expressions
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;
const currencyRegex = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/;
const hashtagRegex = /#\w+/;

// If they match the output will be true if not false will be the output
console.log("Email validation:", emailRegex.test(Email));
console.log("Phone validation:", phoneRegex.test(Phone));
console.log("Currency validation:", currencyRegex.test(Currency));
console.log("Hashtag validation:", hashtagRegex.test(Hashtag));

