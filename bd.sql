
-- Banco de dados: `stock`
--
CREATE DATABASE IF NOT EXISTS `stock` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `stock`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `defeitopc`
--

CREATE TABLE `defeitopc` (
  `id_pcDef` int(11) NOT NULL,
  `cod_pc` varchar(500) DEFAULT NULL,
  `data_def` varchar(500) DEFAULT NULL,
  `nomePc` varchar(500) DEFAULT NULL,
  `marca` varchar(500) DEFAULT NULL,
  `modelo` varchar(500) DEFAULT NULL,
  `so` varchar(500) DEFAULT NULL,
  `garantia` varchar(500) DEFAULT NULL,
  `ram` varchar(500) DEFAULT NULL,
  `processador` varchar(500) DEFAULT NULL,
  `hd` varchar(500) DEFAULT NULL,
  `statusd` varchar(500) DEFAULT NULL,
  `descricao` varchar(500) DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `heads`
--

CREATE TABLE `heads` (
  `id` int(11) NOT NULL,
  `head_marca` varchar(100) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `heads`
--

INSERT INTO `heads` (`id`, `head_marca`, `quantidade`, `updated_at`, `created_at`) VALUES
(1, 'logitech', NULL, '2023-03-24 02:11:35', NULL),
(2, '[value-2]', NULL, NULL, NULL),
(3, 'teste', NULL, '2023-03-23 00:59:01', '2023-03-23 00:59:01');

-- --------------------------------------------------------

--
-- Estrutura da tabela `kit`
--

CREATE TABLE `kit` (
  `id_kit` int(11) NOT NULL,
  `data_kit` varchar(500) DEFAULT NULL,
  `status_kit` varchar(500) DEFAULT NULL,
  `id_operador` varchar(500) DEFAULT NULL,
  `nome_operador` varchar(500) DEFAULT NULL,
  `telefone` varchar(500) DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL,
  `endereco` varchar(500) DEFAULT NULL,
  `cargo` varchar(500) DEFAULT NULL,
  `setor` varchar(500) DEFAULT NULL,
  `supervisor` varchar(500) DEFAULT NULL,
  `operacao` varchar(500) DEFAULT NULL,
  `nome_pc` varchar(500) DEFAULT NULL,
  `cod_pc` varchar(500) DEFAULT NULL,
  `marca_pc` varchar(500) DEFAULT NULL,
  `modelo_pc` varchar(500) DEFAULT NULL,
  `processador` varchar(500) DEFAULT NULL,
  `memoria` varchar(500) DEFAULT NULL,
  `so` varchar(500) DEFAULT NULL,
  `hd` varchar(500) DEFAULT NULL,
  `garantia` varchar(500) DEFAULT NULL,
  `marca_monitor` varchar(500) DEFAULT NULL,
  `marca_teclado` varchar(500) DEFAULT NULL,
  `marca_mouse` varchar(500) DEFAULT NULL,
  `marca_head` varchar(500) DEFAULT NULL,
  `marca_webcam` varchar(500) DEFAULT NULL,
  `qnt_vga` varchar(500) DEFAULT NULL,
  `qnt_e` varchar(500) DEFAULT NULL,
  `rede` varchar(500) DEFAULT NULL,
  `lacre` varchar(500) DEFAULT NULL,
  `id_monitor` varchar(500) DEFAULT NULL,
  `cod_monitor` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `monitor`
--

CREATE TABLE `monitor` (
  `id_monitor` int(11) NOT NULL,
  `marca_monitor` varchar(100) DEFAULT NULL,
  `modelo_monitor` varchar(100) DEFAULT NULL,
  `cod_monitor` varchar(200) DEFAULT NULL,
  `status_monitor` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `monitordef`
--

CREATE TABLE `monitordef` (
  `id_monitorDefeito` int(11) NOT NULL,
  `cod_monitor` varchar(200) DEFAULT NULL,
  `data_defeito` varchar(200) DEFAULT NULL, 
  `marca_monitor` varchar(200) DEFAULT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `statusm` varchar(200) DEFAULT NULL,
  `nome` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `mouses`
--

CREATE TABLE `mouses` (
  `id` int(11) NOT NULL,
  `marca_mouse` varchar(100) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `operador`
--

CREATE TABLE `operador` (
  `id_operador` int(11) NOT NULL,
  `data_cad` varchar(200) DEFAULT NULL,
  `nome_operador` varchar(500) DEFAULT NULL,
  `email_operador` varchar(500) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `celular` varchar(500) DEFAULT NULL,
  `endereco` varchar(500) DEFAULT NULL,
  `cep` varchar(500) DEFAULT NULL,
  `numero` varchar(500) DEFAULT NULL,
  `complemento` varchar(500) DEFAULT NULL,
  `referencia` varchar(500) DEFAULT NULL,
  `bairro` varchar(500) DEFAULT NULL,
  `cidade` varchar(500) DEFAULT NULL,
  `estado` varchar(500) DEFAULT NULL,
  `setor` varchar(500) DEFAULT NULL,
  `cargo` varchar(500) DEFAULT NULL,
  `status_operador` varchar(500) DEFAULT NULL,
  `empresa` varchar(500) DEFAULT NULL,
  `supervisor` varchar(500) DEFAULT NULL,
  `cpf` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pc`
--

CREATE TABLE `pc` (
  `id_formulario` int(11) NOT NULL,
  `datacad` varchar(100) DEFAULT NULL,
  `codpc` varchar(500) NOT NULL,
  `nome_pc` varchar(500) DEFAULT NULL,
  `processador` varchar(500) DEFAULT NULL,
  `marca_pc` varchar(500) DEFAULT NULL,
  `hd` varchar(500) DEFAULT NULL,
  `memoria` varchar(500) DEFAULT NULL,
  `so` varchar(500) DEFAULT NULL,
  `garantia` varchar(500) DEFAULT NULL,
  `status_pc` varchar(500) DEFAULT NULL,
  `modelo` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `teclados`
--

CREATE TABLE `teclados` (
  `id` int(11) NOT NULL,
  `teclado_marca` varchar(100) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `teclados`
--

INSERT INTO `teclados` (`id`, `teclado_marca`, `quantidade`, `updated_at`, `created_at`) VALUES
(1, 'microsoft', NULL, '2023-03-28 01:16:25', NULL),
(2, 'razer', NULL, '2023-03-28 01:07:04', '2023-03-28 01:07:04'),
(3, 'multilaser', NULL, '2023-03-28 01:07:36', '2023-03-28 01:07:36');

-- --------------------------------------------------------

--
-- Estrutura da tabela `webcam`
--

CREATE TABLE `webcam` (
  `id_webcam` int(11) NOT NULL,
  `webcam_marca` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `defeitopc`
--
ALTER TABLE `defeitopc`
  ADD PRIMARY KEY (`id_pcDef`);

--
-- Índices para tabela `heads`
--
ALTER TABLE `heads`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `kit`
--
ALTER TABLE `kit`
  ADD PRIMARY KEY (`id_kit`);

--
-- Índices para tabela `monitor`
--
ALTER TABLE `monitor`
  ADD PRIMARY KEY (`id_monitor`);

--
-- Índices para tabela `monitordef`
--
ALTER TABLE `monitordef`
  ADD PRIMARY KEY (`id_monitorDefeito`);

--
-- Índices para tabela `mouses`
--
ALTER TABLE `mouses`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `operador`
--
ALTER TABLE `operador`
  ADD PRIMARY KEY (`id_operador`),
  ADD UNIQUE KEY `email_operador` (`email_operador`),
  ADD UNIQUE KEY `tel` (`tel`);

--
-- Índices para tabela `pc`
--
ALTER TABLE `pc`
  ADD PRIMARY KEY (`id_formulario`),
  ADD UNIQUE KEY `codpc` (`codpc`),
  ADD UNIQUE KEY `nome_pc` (`nome_pc`);

--
-- Índices para tabela `teclados`
--
ALTER TABLE `teclados`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `webcam`
--
ALTER TABLE `webcam`
  ADD PRIMARY KEY (`id_webcam`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `defeitopc`
--
ALTER TABLE `defeitopc`
  MODIFY `id_pcDef` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `heads`
--
ALTER TABLE `heads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `kit`
--
ALTER TABLE `kit`
  MODIFY `id_kit` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `monitor`
--
ALTER TABLE `monitor`
  MODIFY `id_monitor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `monitordef`
--
ALTER TABLE `monitordef`
  MODIFY `id_monitorDefeito` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `mouses`
--
ALTER TABLE `mouses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `operador`
--
ALTER TABLE `operador`
  MODIFY `id_operador` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `pc`
--
ALTER TABLE `pc`
  MODIFY `id_formulario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `teclados`
--
ALTER TABLE `teclados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `webcam`
--
ALTER TABLE `webcam`
  MODIFY `id_webcam` int(11) NOT NULL AUTO_INCREMENT;
--
-- Banco de dados: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
--
