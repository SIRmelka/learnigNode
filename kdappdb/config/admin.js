module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6d26c8b97979cbc75c58aa7da8aeacdc'),
  },
});
