CREATE DATABASE IF NOT EXISTS `sch_learecords`;

CREATE TABLE IF NOT EXISTS `tbl_catalogo_discos` (
  `idDiscos` int NOT NULL AUTO_INCREMENT,
  `tituloDisco` varchar(100) NOT NULL,
  `artista` varchar(100) NOT NULL,
  `anoLancamento` year NOT NULL,
  `estiloMusical` varchar(30) NOT NULL,
  `quantidadeEstoque` int NOT NULL,
  PRIMARY KEY (`idDiscos`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;

CREATE TABLE IF NOT EXISTS `tbl_clientes` (
  `cpfCliente` bigint NOT NULL,
  `nomeCompletoCliente` varchar(100) NOT NULL,
  `dataNascimentoCliente` date NOT NULL,
  `emailCliente` varchar(100) DEFAULT NULL,
  `telefoneCliente` char(20) DEFAULT NULL,
  `clienteAtivo` tinyint NOT NULL,
  PRIMARY KEY (`cpfCliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE IF NOT EXISTS `tbl_pedidos` (
  `numeroPedido` int NOT NULL AUTO_INCREMENT,
  `cpfCliente` bigint NOT NULL,
  `idDiscos` int NOT NULL,
  `quantidadeProdutos` int NOT NULL,
  `dataHoraPedido` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`numeroPedido`),
  KEY `idDiscos_idx` (`idDiscos`),
  KEY `cpfCliente_idx` (`cpfCliente`),
  CONSTRAINT `cpfCliente` FOREIGN KEY (`cpfCliente`) REFERENCES `tbl_clientes` (`cpfCliente`),
  CONSTRAINT `idDiscos` FOREIGN KEY (`idDiscos`) REFERENCES `tbl_catalogo_discos` (`idDiscos`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;

INSERT INTO `tbl_catalogo_discos` VALUES 
(1,  `Paramore`, `Paramore`, 2013, `Alternativo`, 200),
(2,  `Riot!`, `Paramore`, 2007, `Pop Rock`, 100),
(3,  `Brand New Eyes`, `Paramore`, 2009, `Pop Rock`, 20),
(4,  `All We Know Is Falling`, `Paramore`, 2005, `Rock`, 8),
(5,  `After Laughter`, `Paramore`, 2017, `Alternativo`, 10),
(6,  `Can't Stop, Won't Stop`, `The Maine`, 2013, `Pop Punk`, 2000),
(7,  `Black & White`, `The Maine`, 2013, `Pop Punk`, 199),
(8,  `Pioneer`, `The Maine`, 2013, `Alternativo`, 128),
(9,  `Lovely Little Lonely`, `The Maine`, 2013, `Alternativo`, 2200),
(10, `You Are OK`, `The Maine`, 2013, `Alternativo`, 200);

INSERT INTO `tbl_clientes` VALUES
(30966090470 "Luana Jéssica Isabel Assis", "1966-01-12", "luana-assis77@owl-ti.com.br", "67993469516", true),
(68233217417, "Heloisa Amanda Catarina Figueiredo", "1963-03-08", "heloisa-figueiredo95@jbtc.com", "92984089267", true),
(60981632190, "Levi Carlos Eduardo Marcelo Melo", "1981-10-12", "levi_carlos_melo@prokopetz.com.br", "66999680218", true),
(11218932953, "Luzia Isis Hadassa Moraes", "1980-08-12", "luzia-moraes92@solutionimoveis.com.br", "27997312969", true),
(48518547067, "Hugo Benjamin Gonçalves", "1990-12-21", "hugo.benjamin.goncalves@redacaofinal.com.br", "31987050525", true),
(87796343035, "Victor Sebastião Drumond", "1991-01-03", "victorsebastiaodrumond@gmx.ca", "66984245262", true),
(38609614115, "Benedito Erick César Rocha", "1985-11-18", "benedito-rocha71@s2solucoes.com.br", "81999519495", true),
(93674852209, "Isabela Mariah Costa", "1958-12-08", "isabelamariahcosta@mabeitex.com.br", "99987953874", true),
(26421508529, "Heloisa Andreia Alice Corte Real", "1975-09-03", "heloisa.andreia.cortereal@molsanto.com", "84994525836", true),
(52031352156, "Tatiane Juliana da Luz", "2004-12-01", "tatiane_daluz@dlh.de", "43986153415", true),
(42445279232, "Heloise Marli Pires", "2004-12-01", "heloise.marli.pires@nogueiramoura.adv.br", "79982835911", true),
(58584963006, "Sabrina Luzia Andrea Nascimento", "2004-12-01", "sabrina.luzia.nascimento@belbrindes.com", "82995832249", true),
(16138799895, "Sophia Tânia Lopes", "2004-12-01", "sophia-lopes72@agreonoma.eng.br", "27987761468", true),
(07825510259, "Mirella Carolina Amanda Caldeira", "2004-12-01", "mirella_caldeira@reval.net", "94988541968", true),
(68023313223, "Sabrina Flávia Joana da Cunha", "2004-12-01", "sabrina_dacunha@dosnu.com.br", "86995210407", true),
(32490082736, "Yago Hugo Lorenzo Nogueira", "2004-12-01", "yago_nogueira@senioraereo.com.br", "75996780729", true),
(50768883172, "Elias Ian Tomás Fogaça", "2004-12-01", "elias-fogaca84@nipbr.com", "79988712299", true),
(31360768939, "Renata Sueli Carvalho", "2004-12-01", "renatasuelicarvalho@redex.com.br", "61985761510", true),
(67918829565, "Emanuelly Simone Cavalcanti", "2004-12-01", "emanuelly_cavalcanti@iglod.com", "81989631325", true),
(52331339899, "João Nelson da Mota", "2004-12-01", "joao.nelson.damota@cognis.com", "88983988459", true),
(25740879256, "Renato Luís Mendes", "2004-12-01", "renato-mendes92@yahoo.es", "21997449685", true),
(93506918257, "Osvaldo Marcelo Vinicius Silveira", "2004-12-01", "osvaldo_silveira@hotmail.con", "93995751024", true),
(75988016227, "Filipe Geraldo Nelson Almeida", "2004-12-01", "filipe_geraldo_almeida@psq.med.br", "4126749740", true),
(04268792449, "Letícia Giovanna Porto", "2004-12-01", "leticia.giovanna.porto@ticem.com.br", "27982150462", true),
(73368231146, "Martin Danilo Severino Fernandes", "2004-12-01", "martindanilofernandes@right.com.br", "22983306514", true),
(41888583541, "Francisca Tereza Márcia Freitas", "2004-12-01", "francisca.tereza.freitas@jotace.eti.br", "83994804731", true),
(47912372695, "Eliane Marlene Melissa Pereira", "2004-12-01", "eliane_pereira@projetemovelaria.com.br", "83988753526", true),
(93702232079, "Heitor Lorenzo Rezende", "2004-12-01", "heitor.lorenzo.rezende@imeio.com", "48998421416", true),
(74374697233, "Giovana Alícia Rosa Monteiro", "2004-12-01", "giovanaaliciamonteiro@nine9.com.br", "55982954702", true);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;
