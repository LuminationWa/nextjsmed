import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';



const Home = () => {
    return (
        <main className="home-main">
            <section className="top">
                <div className="top-section wrapper">
                    <div className="top-section-content">
                        <h1 className="h1 main-h1">Somos los mejores</h1>
                        <p className="header-p">
                            Acompañándolo desde 1968<br />
                            Sus <span className='highlight-2'>Marcas</span> y <span className='highlight-2'>Patentes</span> protegidas, y sus ideas llevadas a la realidad<br />
                            Asesoramiento continuo, siempre presente y personalizado
                            para cada cliente
                        </p>
                        <Link href="/es/contacto"><Button variant="contained">Entrar en contacto</Button></Link>
                    </div>
                    <div className='image-container'>
                    </div>
                </div>
            </section>
            <div className='sub-bar'>
                <p>Defensas</p>
                <p>Registros</p>
                <p>Vigilancias</p>
            </div>
            <div className="header-bar wrapper">
                <div className="header-container">
                    <div className="bar-container">
                        <h2 className="bar-h2">Atención <br /> permanente</h2>
                        <p className="bar-p">Profesionales letrados altamente calificados y con amplia experiencia a su disposición las 24 horas del día, garantizando su satisfacción</p>
                    </div>
                    <div className="bar-container">
                        <h2 className="bar-h2">Asesoriamiento <br /> internacional</h2>
                        <p className="bar-p">Atendemos clientes de todo el mundo, desde nuestra base principal en Uruguay y para toda América</p>
                    </div>

                    <div className="bar-container">
                        <h2 className="bar-h2">Responsabilidad <br /> primero</h2>
                        <p className="bar-p">Nos encargamos de brindarle tranquilidad y seguridad en cada etapa de la gestión, asumiendo total responsabilidad durante todo el proceso</p>
                    </div>
                </div>
            </div>
            <div className="middle-section wrapper">
                <div className="left-side">
                    <div className="info-container">
                        <h2 className="middle-h2">¿Por qué registrar mi marca?</h2>
                        <p className="middle-p">Al registrar una marca, el titular obtiene derechos exclusivos en el país donde la registra, lo que le permite actuar legalmente contra el uso no autorizado por terceros.<br />
                            Aunque el registro de marca no es obligatorio en Uruguay, no hacerlo puede exponer al titular a conflictos legales si otro solicitante registra una marca similar.<br />
                            El registro otorga un derecho transferible, altamente valioso para las empresas, que puede ser licenciado en acuerdos onerosos o gratuitos.</p>
                    </div>
                    <div className="info-container">
                        <h2 className="middle-h2">¿Por qué elegirnos?</h2>
                        <p className="middle-p">
                            Ofrecemos una fluida relación comercial y profesional por los diversos medios de comunicación, presencia física y en línea para atender sus requerimientos y brindar máxima confianza. <br />
                            Nuestros profesionales titulados tienen experiencia práctica en diversas áreas del mundo real. <br />
                            Conocemos las leyes y procesos de Marcas y Patentes de todos los países de América, asegurando un control exhaustivo y actualizado en cada tarea encomendada. <br />
                            Trabajamos con colegas selectos en toda América y asumimos la responsabilidad para proteger sus intereses en Derecho Industrial, Comercial e Intelectual.</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="right-info">
                        <h1 className="right-h1">99%</h1>
                        <p className="right-p">Clientes safisfechos</p>
                    </div>
                    <div className="right-info">
                        <h1 className="right-h1">2500+</h1>
                        <p className="right-p">Casos ganados</p>
                    </div>
                    <div className="right-info">
                        <h1 className="right-h1">4000+</h1>
                        <p className="right-p">Marcas concedidas</p>
                    </div>
                    <div className="right-info">
                        <h1 className="right-h1">550+</h1>
                        <p className="right-p">Patentes registradas</p>
                    </div>
                    <div className="right-info">
                        <h1 className="right-h1">400+</h1>
                        <p className="right-p">Disputas resueltas</p>
                    </div>
                </div>
            </div>
            <div className="faq-section wrapper">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel0a-content"
                        id="panel0a-header"
                    >
                        <Typography>¿Qué es una Marca?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="faq-p">
                            Es definida por nuestra normativa vigente como todo signo con la aptitud suficiente para distinguir ya sea productos o servicios (dependiendo las clases a la/s que se solicite/registre), de una persona física o jurídica de otra.<br />

                            Un signo a solicitar o registrar, puede ser de varios tipos: <br />

                            Solo la palabra o palabras,

                            palabra/s con un dibujo,

                            dibujo solo,

                            frases publicitarias,

                            sonidos,

                            aromas.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>¿Cómo es el procedimiento de Solicitud de una Marca?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="faq-p">
                            Previamente es posible realizar un informe sin cargo para el cliente, sobre la viabilidad de la solicitud a pedir y su inmediata incorporación al registro. <br />

                            La Solicitud de Marca, requiere la identificación del signo a pedir, el que luego de ser ingresado no puede cambiarse. <br />
                            Además de los datos del solicitante (nombre y apellido en caso de persona física o denominación si es una persona jurídica, identificación con documento de identidad o registro tributario, dirección física en Uruguay u otro país). La clase o clases para la/s que se pide.<br />

                            Una vez que se ingresa su solicitud se le adjudica un número de acta que confiere un derecho de prioridad con fecha y hora sobre cualquier otra posterior que se presente de la misma marca o similar, la cual quedará pendiente de la resolución de la suya previa. <br />

                            De no existir objeciones en el Registro por antecedentes ni de terceros que pudieran interponer un protesto a la solicitud, será concedida por un plazo de diez años. Prorrogables por períodos iguales.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>¿Puede ser una Marca registrada internacionalmente?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="faq-p">
                            En primer término, las marcas son territoriales, esto es que responden a la normativa de un territorio o país determinado. <br />
                            A partir de ese concepto, sí tenemos Convenios Internacionales, como ser: <br />
                            Convenio de Paris, y otros tratados cuales son, Protocolo de Madrid, Tratado de la Unión Europea, Pacto Andino, los cuales con un solo pedido y el pago de las tasas de cada uno de los paises solicitados comienzan un proceso en todos ellos, más allá que el resultado de uno no obliga al de los otros.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className='test'>¿Qué es una Patente?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="faq-p">
                            Un objeto industrial novedoso producto de una idea que busca solucionar una situación en determinada área específica.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>¿Qué tipos de Patentes se pueden registrar?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="faq-p">
                            De Invención, Modelos de Utilidad, Diseños Industriales.<br />
                            Dependiendo del objeto a patentar, cumpliendo con tener actividad inventiva ser susceptible de tener aplicación industrial:<br />
                            Invención: nuevos productos o de procedimientos (invención);<br />
                            Modelo de Utilidad: una nueva disposición o conformación obtenida o introducida en herramientas, instrumentos de trabajo, utensilios, dispositivos, equipos u otros objetos conocidos, por lo que se obtenga una mejor utilización o mejor resultado para su fin,  para su uso o fabricación.<br />
                            Diseños Industriales: creaciones originales ornamentales que le otorguen una apariencia diferentes aplicado al producto.<br />
                            Otorgada la patente le permite previo pago de anualidades, exclusividad de veinte años en invenciones y diez años en modelos de utilidad o diseños industriales (prorrogables por cinco años en modelos de utilidad y diseños industriales).
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <Typography>¿Cómo es el procedimiento de Solicitud de Patente?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="faq-p">
                            Se aconseja la búsqueda previa tanto nacional como internacional.<br />
                            Luego de la presentación de la Solicitud de Patentes, con todos los requisitos necesarios para su presentación que es diferente que en marcas, se realiza un examen primario de formalidades y de patentabilidad, transcurridos los plazo legales publica en el Boletín Oficial de Marcas.<br />
                            Se inicia el plazo para las presentaciones de Oposiciones por terceros, sesenta días posteriores a la publicación.<br />
                            Si el Estado de la técnica lo permite, no se presentaron oposiciones de terceros, ni hay impedimentos normativos, se resuelve concediendo la patente.
                        </p>
                    </AccordionDetails>
                </Accordion>
            </div>
        </main>
    )
}

export default Home;