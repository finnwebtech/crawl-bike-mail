import { SMTPClient, Message } from "emailjs";

const client = new SMTPClient({
	user: "finnweb85@gmail.com",
	password: "Pumarot85",
	host: "smtp.gmail.com",
	ssl: true,
});

const message = new Message({
    from: "Crawler <crawler@node>",
	to: "Me <bikes@finnweb.tech>",
	subject: "testing emailjs",
	text: "i hope this works",
});

client.send(message, (err, message) => {
	console.log(err || message);
});
