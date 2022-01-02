// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const body = JSON.parse(req.body);
    
    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Project Tile: ${body.title}\r\n
    Budget: ${body.budget}\r\n
    Message: ${body.message}
  `;

    res.status(200).json({ status: 'OK' });

   

  };

  
