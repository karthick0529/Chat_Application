const corsOptions = {
  origin: [
    process.env.CLIENT_URL
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const DHEECHAT_TOKEN = "DheeChat-token";

export { corsOptions, DHEECHAT_TOKEN };
