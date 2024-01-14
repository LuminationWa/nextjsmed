import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import NearMeIcon from "@mui/icons-material/NearMe";
import EmailIcon from "@mui/icons-material/Email";
import FaxIcon from "@mui/icons-material/Fax";

const Contacto = () => {
  const buttonStyle = {
    marginTop: "1rem",
  };
  return (
    <main className="contacto-main">
      <h1 className="h1">Contacto</h1>

      <div className="media-div media-multi">
        <a href="https://www.instagram.com/medina.marcas/">
          <InstagramIcon fontSize="small" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100063489703723">
          <FacebookIcon fontSize="small" />
        </a>
        <a href="https://twitter.com/marcasmedinauy">
          <TwitterIcon fontSize="small" />
        </a>
      </div>

      <form
        className="contacto-form"
        action="https://api.web3forms.com/submit"
        method="post"
      >
        <input
          type="hidden"
          name="access_key"
          value="dfd3d206-a41f-40fb-b9bc-4651cfa549af"
        ></input>
        <div class="h-captcha" data-captcha="true"></div>
        <TextField
          required
          name="name"
          id="name"
          label="Nombre"
          variant="standard"
        />
        <TextField
          required
          name="email"
          id="email"
          label="Correo"
          variant="standard"
        />
        <TextField
          name="phone"
          id="phone"
          label="Teléfono"
          variant="standard"
        />
        <TextField
          name="message"
          multiline
          rows={3}
          required
          id="message"
          label="Mensaje"
          variant="standard"
        />
        <Button variant="contained" style={buttonStyle} type="submit">
          Enviar
        </Button>
      </form>
      <div className="media-info wrapper">
        <div className="media-div">
          <NearMeIcon />
          Av. Garibaldi 2185, Montevideo, Uruguay
        </div>
        <div className="media-div">
          <EmailIcon />
          info@medinamarcas.uy
        </div>
        <div className="media-div">
          <RingVolumeIcon />
          +598 22039306
        </div>
        <div className="media-div">
          <WhatsAppIcon />
          +598 98987250
        </div>
        <div className="media-div">
          <FaxIcon />
          Fax +598 22007474
        </div>
      </div>
    </main>
  );
};

export default Contacto;
