

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `pcdeifeito` (
  `id` int(11) NOT NULL,
  `data_def` varchar(500) DEFAULT NULL,
  `descricao` varchar(500) DEFAULT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL,
  `pc` int(11) NOT NULL,
  `operador` int(11) NOT NULL,
  `status_pc` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `estoque`
--

CREATE TABLE `estoque` (
  `mouse_id` int(11) NOT NULL,
  `teclado_id` int(11) NOT NULL,
  `head_id` int(11) NOT NULL,
  `webcam` int(11) NOT NULL,
  `monitor` int(11) NOT NULL,
  `pc` int(11) NOT NULL
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
  `id` int(11) NOT NULL,
  `data_kit` varchar(500) DEFAULT NULL,
  `status_kit` varchar(500) DEFAULT NULL,
  `qnt_vga` varchar(500) DEFAULT NULL,
  `qnt_e` varchar(500) DEFAULT NULL,
  `rede` varchar(500) DEFAULT NULL,
  `lacre` varchar(500) DEFAULT NULL,
  `operador` int(11) NOT NULL,
  `pc` int(11) NOT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL,
  `foto` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `monitordef`
--

CREATE TABLE `monitordef` (
  `id_monitorDefeito` int(11) NOT NULL,
  `data_defeito` varchar(200) DEFAULT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `statusm` varchar(200) DEFAULT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL,
  `monitor` int(11) DEFAULT NULL,
  `operador` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `monitores`
--

CREATE TABLE `monitores` (
  `id` int(11) NOT NULL,
  `marca_monitor` varchar(100) DEFAULT NULL,
  `modelo_monitor` varchar(100) DEFAULT NULL,
  `cod_monitor` varchar(200) DEFAULT NULL,
  `status_monitor` varchar(200) DEFAULT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL
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
  `id` int(11) NOT NULL,
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
  `id` int(11) NOT NULL,
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
  `modelo` varchar(500) DEFAULT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL
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
  ADD PRIMARY KEY (`id`),
  ADD KEY `maquina` (`pc`),
  ADD KEY `dados_operador` (`operador`);

--
-- Índices para tabela `estoque`
--
ALTER TABLE `estoque`
  ADD KEY `head_id` (`head_id`),
  ADD KEY `teclado_id` (`teclado_id`),
  ADD KEY `mouse_id` (`mouse_id`),
  ADD KEY `webcam_id` (`webcam`),
  ADD KEY `monitor_id` (`monitor`),
  ADD KEY `pc` (`pc`);

--
-- Índices para tabela `heads`
--
ALTER TABLE `heads`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `kit`
--
ALTER TABLE `kit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `operador` (`operador`),
  ADD KEY `pc_id` (`pc`);

--
-- Índices para tabela `monitordef`
--
ALTER TABLE `monitordef`
  ADD PRIMARY KEY (`id_monitorDefeito`),
  ADD KEY `monitor` (`monitor`),
  ADD KEY `operador_id` (`operador`);

--
-- Índices para tabela `monitores`
--
ALTER TABLE `monitores`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `mouses`
--
ALTER TABLE `mouses`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `operador`
--
ALTER TABLE `operador`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_operador` (`email_operador`),
  ADD UNIQUE KEY `tel` (`tel`);

--
-- Índices para tabela `pc`
--
ALTER TABLE `pc`
  ADD PRIMARY KEY (`id`),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `heads`
--
ALTER TABLE `heads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `kit`
--
ALTER TABLE `kit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `monitordef`
--
ALTER TABLE `monitordef`
  MODIFY `id_monitorDefeito` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `monitores`
--
ALTER TABLE `monitores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `mouses`
--
ALTER TABLE `mouses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `operador`
--
ALTER TABLE `operador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `pc`
--
ALTER TABLE `pc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `defeitopc`
--
ALTER TABLE `defeitopc`
  ADD CONSTRAINT `dados_operador` FOREIGN KEY (`operador`) REFERENCES `operador` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `maquina` FOREIGN KEY (`pc`) REFERENCES `pc` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `estoque`
--
ALTER TABLE `estoque`
  ADD CONSTRAINT `head_id` FOREIGN KEY (`head_id`) REFERENCES `heads` (`id`),
  ADD CONSTRAINT `monitor_id` FOREIGN KEY (`monitor`) REFERENCES `monitores` (`id`),
  ADD CONSTRAINT `mouse_id` FOREIGN KEY (`mouse_id`) REFERENCES `mouses` (`id`),
  ADD CONSTRAINT `pc` FOREIGN KEY (`pc`) REFERENCES `pc` (`id`),
  ADD CONSTRAINT `teclado_id` FOREIGN KEY (`teclado_id`) REFERENCES `teclados` (`id`),
  ADD CONSTRAINT `webcam_id` FOREIGN KEY (`webcam`) REFERENCES `webcam` (`id_webcam`);

--
-- Limitadores para a tabela `kit`
--
ALTER TABLE `kit`
  ADD CONSTRAINT `operador` FOREIGN KEY (`operador`) REFERENCES `operador` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pc_id` FOREIGN KEY (`pc`) REFERENCES `pc` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `monitordef`
--
ALTER TABLE `monitordef`
  ADD CONSTRAINT `monitor` FOREIGN KEY (`monitor`) REFERENCES `monitores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `operador_id` FOREIGN KEY (`operador`) REFERENCES `operador` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
