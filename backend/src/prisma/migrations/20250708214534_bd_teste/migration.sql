-- CreateTable
CREATE TABLE "usuario" (
    "usuario_id" SERIAL NOT NULL,
    "usuario_nome" TEXT NOT NULL,
    "usuario_sobre" TEXT,
    "usuario_email" TEXT NOT NULL,
    "usuario_senha" TEXT,
    "usuario_telefone" TEXT,
    "usuario_endereco" TEXT,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("usuario_id")
);

-- CreateTable
CREATE TABLE "desenvolvedor" (
    "desenvolvedor_cpf" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "desenvolvedor_pkey" PRIMARY KEY ("desenvolvedor_cpf")
);

-- CreateTable
CREATE TABLE "empresa" (
    "empresa_cnpj" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "ano_fundacao" TIMESTAMP(3),

    CONSTRAINT "empresa_pkey" PRIMARY KEY ("empresa_cnpj")
);

-- CreateTable
CREATE TABLE "vaga" (
    "id_vaga" SERIAL NOT NULL,
    "empresa_cnpj" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "beneficios" TEXT,
    "modalidade" TEXT,
    "data_fim" DATE,
    "requisitos" TEXT,
    "link_contrato" TEXT,
    "regime" TEXT,
    "carga_horaria" TEXT,

    CONSTRAINT "vaga_pkey" PRIMARY KEY ("id_vaga")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_usuario_email_key" ON "usuario"("usuario_email");

-- CreateIndex
CREATE UNIQUE INDEX "desenvolvedor_usuario_id_key" ON "desenvolvedor"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "empresa_usuario_id_key" ON "empresa"("usuario_id");

-- AddForeignKey
ALTER TABLE "desenvolvedor" ADD CONSTRAINT "desenvolvedor_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("usuario_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empresa" ADD CONSTRAINT "empresa_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("usuario_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vaga" ADD CONSTRAINT "vaga_empresa_cnpj_fkey" FOREIGN KEY ("empresa_cnpj") REFERENCES "empresa"("empresa_cnpj") ON DELETE RESTRICT ON UPDATE CASCADE;
