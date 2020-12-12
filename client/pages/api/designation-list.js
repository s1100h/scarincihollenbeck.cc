export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      res.status(200).json({
        status: 200,
        message: "here's the current list of available designations",
        data: [
          'Associate',
          'Senior Associate',
          'Counsel',
          'Of Counsel',
          'Of Counsel/Partner Emeritus',
          'Partner',
          'Managing Partner',
          'NYC Managing Partner',
          'Washington, D.C. Managing Partner',
        ],
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error });
    }
  }
}
