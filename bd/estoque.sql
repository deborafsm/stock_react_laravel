-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23/05/2023 às 04:09
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `estoque`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `computers`
--

CREATE TABLE `computers` (
  `id` int(11) NOT NULL,
  `codigo` varchar(50) NOT NULL,
  `nome` varchar(80) NOT NULL,
  `marca` varchar(30) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `so` varchar(20) NOT NULL,
  `garantia` tinyint(1) NOT NULL,
  `memoria` varchar(10) NOT NULL,
  `processador` varchar(10) NOT NULL,
  `hd` varchar(10) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `create_at` varchar(100) NOT NULL,
  `update_at` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `faulty_computers`
--

CREATE TABLE `faulty_computers` (
  `id` int(11) NOT NULL,
  `descricao` text NOT NULL,
  `status` int(1) NOT NULL,
  `pc` int(11) NOT NULL,
  `operador` int(11) NOT NULL,
  `data_reparo` varchar(12) NOT NULL,
  `obsercacao` varchar(100) NOT NULL,
  `tecnico_resp` varchar(30) NOT NULL,
  `empresa_resp` varchar(30) NOT NULL,
  `create_at` varchar(80) NOT NULL,
  `update_at` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `faulty_monitors`
--

CREATE TABLE `faulty_monitors` (
  `id` int(11) NOT NULL,
  `descricao` text NOT NULL,
  `status` int(1) NOT NULL,
  `monitor` int(11) NOT NULL,
  `operador` int(11) NOT NULL,
  `data_reparo` varchar(12) NOT NULL,
  `obsercacao` varchar(100) NOT NULL,
  `tecnico_resp` varchar(30) NOT NULL,
  `empresa_resp` int(30) NOT NULL,
  `create_at` varchar(80) NOT NULL,
  `update_at` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `heads`
--

CREATE TABLE `heads` (
  `id` int(11) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `modelo` varchar(80) NOT NULL,
  `codigo` varchar(30) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `create_at` varchar(100) NOT NULL,
  `update_at` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `keyboards`
--

CREATE TABLE `keyboards` (
  `id` int(11) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `modelo` varchar(80) NOT NULL,
  `codigo` varchar(30) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` varchar(100) NOT NULL,
  `update_at` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `kit`
--

CREATE TABLE `kit` (
  `id` int(11) NOT NULL,
  `data_kit` varchar(12) NOT NULL,
  `status` int(1) NOT NULL,
  `qnt_vga` int(1) NOT NULL,
  `qnt_e` int(1) NOT NULL,
  `rede` int(1) NOT NULL,
  `lacre` varchar(30) NOT NULL,
  `operador` int(11) NOT NULL,
  `monitor` int(11) NOT NULL,
  `webcam` int(11) NOT NULL,
  `mouse` int(11) NOT NULL,
  `teclado` int(11) NOT NULL,
  `head` int(11) NOT NULL,
  `pc` int(11) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `create_at` varchar(80) NOT NULL,
  `update_at` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `monitors`
--

CREATE TABLE `monitors` (
  `id` int(11) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `modelo` varchar(80) NOT NULL,
  `codigo` varchar(30) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `create_at` varchar(100) NOT NULL,
  `update_at` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `mouses`
--

CREATE TABLE `mouses` (
  `id` int(11) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `modelo` varchar(80) NOT NULL,
  `codigo` varchar(30) NOT NULL,
  `updated_at` varchar(100) NOT NULL,
  `created_at` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `operators`
--

CREATE TABLE `operators` (
  `id` int(11) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefone` int(20) NOT NULL,
  `celular` int(20) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `cep` int(18) NOT NULL,
  `numero` int(7) NOT NULL,
  `complemento` varchar(100) NOT NULL,
  `referencia` varchar(100) NOT NULL,
  `bairro` varchar(50) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `setor` varchar(50) NOT NULL,
  `cargo` varchar(50) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `empresa` varchar(50) NOT NULL,
  `supervisor` varchar(50) NOT NULL,
  `cpf` varchar(50) NOT NULL,
  `create_at` varchar(50) NOT NULL,
  `update_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `webcams`
--

CREATE TABLE `webcams` (
  `id` int(11) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `modelo` varchar(80) NOT NULL,
  `codigo` varchar(30) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `create_at` varchar(100) NOT NULL,
  `update_at` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `computers`
--
ALTER TABLE `computers`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `faulty_computers`
--
ALTER TABLE `faulty_computers`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `faulty_monitors`
--
ALTER TABLE `faulty_monitors`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `heads`
--
ALTER TABLE `heads`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `keyboards`
--
ALTER TABLE `keyboards`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `kit`
--
ALTER TABLE `kit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `operador` (`operador`),
  ADD KEY `pc` (`pc`),
  ADD KEY `monitor` (`monitor`),
  ADD KEY `mouse` (`mouse`),
  ADD KEY `teclado` (`teclado`),
  ADD KEY `head` (`head`),
  ADD KEY `webcam` (`webcam`);

--
-- Índices de tabela `monitors`
--
ALTER TABLE `monitors`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `mouses`
--
ALTER TABLE `mouses`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `operators`
--
ALTER TABLE `operators`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `webcams`
--
ALTER TABLE `webcams`
  ADD PRIMARY KEY (`id`);

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `kit`
--
ALTER TABLE `kit`
  ADD CONSTRAINT `head` FOREIGN KEY (`head`) REFERENCES `heads` (`id`),
  ADD CONSTRAINT `monitor` FOREIGN KEY (`monitor`) REFERENCES `monitors` (`id`),
  ADD CONSTRAINT `mouse` FOREIGN KEY (`mouse`) REFERENCES `mouses` (`id`),
  ADD CONSTRAINT `operador` FOREIGN KEY (`operador`) REFERENCES `operators` (`id`),
  ADD CONSTRAINT `pc` FOREIGN KEY (`pc`) REFERENCES `computers` (`id`),
  ADD CONSTRAINT `teclado` FOREIGN KEY (`teclado`) REFERENCES `keyboards` (`id`),
  ADD CONSTRAINT `webcam` FOREIGN KEY (`webcam`) REFERENCES `webcams` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
