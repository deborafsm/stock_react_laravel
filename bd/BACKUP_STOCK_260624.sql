-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Jun-2024 às 20:04
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `stock`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `computers`
--

CREATE TABLE `computers` (
  `id` int(11) NOT NULL,
  `codigo` varchar(500) NOT NULL,
  `nome` varchar(500) DEFAULT NULL,
  `processador` varchar(500) DEFAULT NULL,
  `marca` varchar(500) DEFAULT NULL,
  `hd` varchar(500) DEFAULT NULL,
  `memoria` varchar(500) DEFAULT NULL,
  `so` varchar(500) DEFAULT NULL,
  `garantia` varchar(500) DEFAULT NULL,
  `status` varchar(500) DEFAULT NULL,
  `modelo` varchar(500) DEFAULT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `computers`
--

INSERT INTO `computers` (`id`, `codigo`, `nome`, `processador`, `marca`, `hd`, `memoria`, `so`, `garantia`, `status`, `modelo`, `updated_at`, `created_at`) VALUES
(1, '23434', 'admin_ti_pc', 'i11', 'dell', '2', '128', 'windows 11', '1 ano', '1', 'dellx01', '2024-06-22 17:15:17', '2024-06-22 17:15:17');

-- --------------------------------------------------------

--
-- Estrutura da tabela `dados`
--

CREATE TABLE `dados` (
  `endereco` varchar(100) DEFAULT NULL,
  `cep` varchar(100) DEFAULT NULL,
  `estado` varchar(11) DEFAULT NULL,
  `cidade` varchar(100) DEFAULT NULL,
  `bairro` varchar(100) DEFAULT NULL,
  `cpf` varchar(100) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `telefone` varchar(100) DEFAULT NULL,
  `celular` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `heads`
--

CREATE TABLE `heads` (
  `id` int(11) NOT NULL,
  `modelo` varchar(100) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `codigo` varchar(100) DEFAULT NULL,
  `marca` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `heads`
--

INSERT INTO `heads` (`id`, `modelo`, `quantidade`, `updated_at`, `created_at`, `status`, `codigo`, `marca`) VALUES
(7, 'teste', NULL, '2024-06-18 23:12:00', '2024-06-18 23:12:00', 1, 'fsd4232343', 'teste'),
(8, 'r123', NULL, '2024-06-18 23:27:39', '2024-06-18 23:27:39', 1, '54e654', 'razer');

-- --------------------------------------------------------

--
-- Estrutura da tabela `keyboards`
--

CREATE TABLE `keyboards` (
  `id` int(11) NOT NULL,
  `marca` varchar(100) DEFAULT NULL,
  `codigo` varchar(100) DEFAULT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL,
  `modelo` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `keyboards`
--

INSERT INTO `keyboards` (`id`, `marca`, `codigo`, `updated_at`, `created_at`, `modelo`, `status`) VALUES
(1, 'microsoft', NULL, '2023-03-28 01:16:25', NULL, NULL, NULL),
(2, 'razer', NULL, '2023-03-28 01:07:04', '2023-03-28 01:07:04', NULL, NULL),
(3, 'multilaser', NULL, '2023-03-28 01:07:36', '2023-03-28 01:07:36', NULL, NULL),
(4, 'gdgdg', 'dfsdfs', '2024-06-18 23:39:03', '2024-06-18 23:39:03', 'sdfs', '1');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `monitors`
--

CREATE TABLE `monitors` (
  `id` int(11) NOT NULL,
  `marca` varchar(100) DEFAULT NULL,
  `modelo` varchar(100) DEFAULT NULL,
  `codigo` varchar(100) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `monitors`
--

INSERT INTO `monitors` (`id`, `marca`, `modelo`, `codigo`, `status`, `updated_at`, `created_at`) VALUES
(1, 'yrdsf', 'dfsdf', 'sdf', 1, '2024-06-18 23:46:37', '2024-06-18 23:46:37');

-- --------------------------------------------------------

--
-- Estrutura da tabela `mouses`
--

CREATE TABLE `mouses` (
  `id` int(11) NOT NULL,
  `marca` varchar(100) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `modelo` varchar(100) DEFAULT NULL,
  `codigo` varchar(100) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `mouses`
--

INSERT INTO `mouses` (`id`, `marca`, `quantidade`, `modelo`, `codigo`, `status`, `updated_at`, `created_at`) VALUES
(1, 'tesfs', NULL, 'dts', 'tetw', 1, '2024-06-18 23:44:14', '2024-06-18 23:44:14');

-- --------------------------------------------------------

--
-- Estrutura da tabela `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `secret` varchar(100) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `redirect` text NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) NOT NULL,
  `access_token_id` varchar(100) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `operators`
--

CREATE TABLE `operators` (
  `id` int(11) NOT NULL,
  `nome` varchar(200) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `setor` varchar(200) DEFAULT NULL,
  `cargo` varchar(200) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `empresa` varchar(200) DEFAULT NULL,
  `supervisor` varchar(200) DEFAULT NULL,
  `dados` varchar(200) DEFAULT NULL,
  `created_at` varchar(200) DEFAULT NULL,
  `updated_at` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `operators`
--

INSERT INTO `operators` (`id`, `nome`, `email`, `setor`, `cargo`, `status`, `empresa`, `supervisor`, `dados`, `created_at`, `updated_at`) VALUES
(3, 'Teste Sa', 'teste11@teste.com.br', 'teste', 'Teste', 1, 'teste', 'teste', NULL, '2024-06-21 14:55:45', '2024-06-21 14:55:45'),
(4, 'Julian O\'Brien', 'julian_obrien@teste.com.br', 'medico clinico', 'R1', 1, 'Hospital CARE', 'Viam Iankevick', NULL, '2024-06-21 14:58:46', '2024-06-21 14:58:46');

-- --------------------------------------------------------

--
-- Estrutura da tabela `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pcdeifeito`
--

CREATE TABLE `pcdeifeito` (
  `id` int(11) NOT NULL,
  `data_def` varchar(500) DEFAULT NULL,
  `descricao` varchar(500) DEFAULT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL,
  `pc` int(11) NOT NULL,
  `operador` int(11) NOT NULL,
  `status_pc` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` int(11) NOT NULL,
  `tokenable_type` varchar(200) NOT NULL,
  `tokenable_id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `token` varchar(1000) NOT NULL,
  `abilities` varchar(500) NOT NULL,
  `last_use` varchar(400) DEFAULT NULL,
  `expires_at` varchar(200) DEFAULT NULL,
  `updated_at` varchar(200) NOT NULL,
  `created_at` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_use`, `expires_at`, `updated_at`, `created_at`) VALUES
(1, 'App\\Models\\User', 7, 'deboraFS@gmail.com.brsdasdasda_Token', '8f69f347cb608182bcb1457099e2789ac0d2b92f47e66880081f258504dc92fc', '[\"*\"]', NULL, NULL, '2024-06-26 18:02:01', '2024-06-26 18:02:01'),
(2, 'App\\Models\\User', 8, 'debora@gmail.com_Token', '33d000858e30a8964d42c364c84cae2753d4b9bc3708abc35166dab02093c53c', '[\"*\"]', NULL, NULL, '2024-06-26 18:03:03', '2024-06-26 18:03:03');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `nome`, `senha`, `email`, `created_at`, `updated_at`) VALUES
(7, NULL, NULL, 'deboraFS@gmail.com.brsdasdasda', '2024-06-26 21:02:01', '2024-06-26 21:02:01'),
(8, NULL, NULL, 'debora@gmail.com', '2024-06-26 21:03:03', '2024-06-26 21:03:03');

-- --------------------------------------------------------

--
-- Estrutura da tabela `webcams`
--

CREATE TABLE `webcams` (
  `id` int(11) NOT NULL,
  `marca` varchar(100) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `modelo` varchar(100) DEFAULT NULL,
  `codigo` varchar(100) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `created_at` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `webcams`
--

INSERT INTO `webcams` (`id`, `marca`, `quantidade`, `modelo`, `codigo`, `status`, `updated_at`, `created_at`) VALUES
(2, 'erwe', NULL, 'werwe', 'werwe', 1, '2024-06-18 23:34:19', '2024-06-18 23:34:19'),
(3, 'logitech', NULL, 'logi2139', '476', 1, '2024-06-18 23:34:38', '2024-06-18 23:34:38');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `computers`
--
ALTER TABLE `computers`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `dados`
--
ALTER TABLE `dados`
  ADD UNIQUE KEY `id` (`id`);

--
-- Índices para tabela `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Índices para tabela `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Índices para tabela `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Índices para tabela `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Índices para tabela `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Índices para tabela `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Índices para tabela `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD UNIQUE KEY `id` (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
