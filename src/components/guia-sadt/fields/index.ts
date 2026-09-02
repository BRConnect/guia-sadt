import { z } from 'zod'

import { registroANSField } from './field-1-registro-ans'
import { numeroGuiaPrincipalField } from './field-3-numero-guia-principal'
import { dataAutorizacaoField } from './field-4-data-autorizacao'
import { senhaField } from './field-5-senha'
import { dataValidadeSenhaField } from './field-6-data-validade-senha'
import { numeroGuiaOperadoraField } from './field-7-numero-guia-operadora'
import { numeroCarteiraField } from './field-8-numero-carteira'
import { validadeCarteiraField } from './field-9-validade-carteira'
import { nomeField } from './field-10-nome'
import { cartaoSUSField } from './field-11-cartao-sus'
import { atendimentoRNField } from './field-12-atendimento-rn'
import { codigoOperadoraField } from './field-13-codigo-operadora'
import { nomeContratadoField } from './field-14-nome-contratado'
import { nomeProfissionalSolicitanteField } from './field-15-nome-profissional-solicitante'
import { conselhoProfissionalField } from './field-16-conselho-profissional'
import { numeroConselhoField } from './field-17-numero-conselho'
import { ufField } from './field-18-uf'
import { codigoCBOField } from './field-19-codigo-cbo'
import { assinaturaProfissionalField } from './field-20-assinatura-profissional'
import { caraterAtendimentoField } from './field-21-carater-atendimento'
import { dataSolicitacaoField } from './field-22-data-solicitacao'
import { indicacaoClinicaField } from './field-23-indicacao-clinica'
import { tabelaField } from './field-24-tabela'
import { codigoProcedimentoField } from './field-25-codigo-procedimento'
import { descricaoField } from './field-26-descricao'
import { quantidadeSolicitadaField } from './field-27-quantidade-solicitada'
import { quantidadeAutorizadaField } from './field-28-quantidade-autorizada'
import { codigoOperadoraExecutanteField } from './field-29-codigo-operadora-executante'
import { nomeContratadoExecutanteField } from './field-30-nome-contratado-executante'
import { codigoCNESField } from './field-31-codigo-cnes'
import { tipoAtendimentoField } from './field-32-tipo-atendimento'
import { indicacaoAcidenteField } from './field-33-indicacao-acidente'
import { tipoConsultaField } from './field-34-tipo-consulta'
import { motivoEncerramentoAtendimentoField } from './field-35-motivo-encerramento-atendimento'
import { dataExecucaoField } from './field-36-data-execucao'
import { horaInicialField } from './field-37-hora-inicial'
import { horaFinalField } from './field-38-hora-final'
import { tabelaExecutadaField } from './field-39-tabela-executada'
import { codigoProcedimentoExecutadoField } from './field-40-codigo-procedimento-executado'
import { descricaoProcedimentoField } from './field-41-descricao-procedimento'
import { quantidadeExecutadaField } from './field-42-quantidade-executada'
import { viaAcessoField } from './field-43-via-acesso'
import { tecnicaField } from './field-44-tecnica'
import { fatorReducaoAcrescimoField } from './field-45-fator-reducao-acrescimo'
import { valorUnitarioField } from './field-46-valor-unitario'
import { valorTotalField } from './field-47-valor-total'
import { grauParticipacaoField } from './field-48-grau-participacao'
import { sequencialReferenciaField } from './field-49-sequencial-referencia'
import { codigoOperadoraCPFField } from './field-50-codigo-operadora-cpf'
import { nomeProfissionalField } from './field-51-nome-profissional'
import { conselhoProfissionalExecutanteField } from './field-52-conselho-profissional-executante'
import { numeroConselhoExecutanteField } from './field-53-numero-conselho-executante'
import { ufExecutanteField } from './field-54-uf-executante'
import { codigoCBOExecutanteField } from './field-55-codigo-cboexecutante'
import { dataRealizacaoProcedimentosField } from './field-56-data-realizacao-procedimentos'
import { assinaturaBeneficiarioResponsavelField } from './field-57-assinatura-beneficiario-responsavel'
import { observacaoJustificativaField } from './field-58-observacao-justificativa'
import { totalProcedimentosField } from './field-59-total-procedimentos'
import { totalTaxasAlugueisField } from './field-60-total-taxas-alugueis'
import { totalMateriaisField } from './field-61-total-materiais'
import { totalOPMEField } from './field-62-total-opme'
import { totalMedicamentosField } from './field-63-total-medicamentos'
import { totalGasesMedicinaisField } from './field-64-total-gases-medicinais'
import { totalGeralField } from './field-65-total-geral'
import { assinaturaResponsavelAutorizacaoField } from './field-66-assinatura-responsavel-autorizacao'
import { assinaturaBeneficiarioResponsavelFinalField } from './field-67-assinatura-beneficiario-responsavel-final'
import { assinaturaContratadoField } from './field-68-assinatura-contratado'

export const guiaSadtFields = [
	registroANSField,
	numeroGuiaPrincipalField,
	dataAutorizacaoField,
	senhaField,
	dataValidadeSenhaField,
	numeroGuiaOperadoraField,
	numeroCarteiraField,
	validadeCarteiraField,
	nomeField,
	cartaoSUSField,
	atendimentoRNField,
	codigoOperadoraField,
	nomeContratadoField,
	nomeProfissionalSolicitanteField,
	conselhoProfissionalField,
	numeroConselhoField,
	ufField,
	codigoCBOField,
	assinaturaProfissionalField,
	caraterAtendimentoField,
	dataSolicitacaoField,
	indicacaoClinicaField,
	tabelaField,
	codigoProcedimentoField,
	descricaoField,
	quantidadeSolicitadaField,
	quantidadeAutorizadaField,
	codigoOperadoraExecutanteField,
	nomeContratadoExecutanteField,
	codigoCNESField,
	tipoAtendimentoField,
	indicacaoAcidenteField,
	tipoConsultaField,
	motivoEncerramentoAtendimentoField,
	dataExecucaoField,
	horaInicialField,
	horaFinalField,
	tabelaExecutadaField,
	codigoProcedimentoExecutadoField,
	descricaoProcedimentoField,
	quantidadeExecutadaField,
	viaAcessoField,
	tecnicaField,
	fatorReducaoAcrescimoField,
	valorUnitarioField,
	valorTotalField,
	grauParticipacaoField,
	sequencialReferenciaField,
	codigoOperadoraCPFField,
	nomeProfissionalField,
	conselhoProfissionalExecutanteField,
	numeroConselhoExecutanteField,
	ufExecutanteField,
	codigoCBOExecutanteField,
	dataRealizacaoProcedimentosField,
	assinaturaBeneficiarioResponsavelField,
	observacaoJustificativaField,
	totalProcedimentosField,
	totalTaxasAlugueisField,
	totalMateriaisField,
	totalOPMEField,
	totalMedicamentosField,
	totalGasesMedicinaisField,
	totalGeralField,
	assinaturaResponsavelAutorizacaoField,
	assinaturaBeneficiarioResponsavelFinalField,
	assinaturaContratadoField,
]

export const guiaSadtSchema = z.object({
	registroANS: registroANSField.schema,
	numeroGuiaPrincipal: numeroGuiaPrincipalField.schema,
	dataAutorizacao: dataAutorizacaoField.schema,
	senha: senhaField.schema,
	dataValidadeSenha: dataValidadeSenhaField.schema,
	numeroGuiaOperadora: numeroGuiaOperadoraField.schema,
	numeroCarteira: numeroCarteiraField.schema,
	validadeCarteira: validadeCarteiraField.schema,
	nome: nomeField.schema,
	cartaoSUS: cartaoSUSField.schema,
	atendimentoRN: atendimentoRNField.schema,
	codigoOperadora: codigoOperadoraField.schema,
	nomeContratado: nomeContratadoField.schema,
	nomeProfissionalSolicitante: nomeProfissionalSolicitanteField.schema,
	conselhoProfissional: conselhoProfissionalField.schema,
	numeroConselho: numeroConselhoField.schema,
	uf: ufField.schema,
	codigoCBO: codigoCBOField.schema,
	assinaturaProfissionalSolicitante: assinaturaProfissionalField.schema,
	caraterAtendimento: caraterAtendimentoField.schema,
	dataSolicitacao: dataSolicitacaoField.schema,
	indicacaoClinica: indicacaoClinicaField.schema,
	tabela: tabelaField.schema,
	codigoProcedimento: codigoProcedimentoField.schema,
	descricao: descricaoField.schema,
	quantidadeSolicitada: quantidadeSolicitadaField.schema,
	quantidadeAutorizada: quantidadeAutorizadaField.schema,
	codigoOperadoraExecutante: codigoOperadoraExecutanteField.schema,
	nomeContratadoExecutante: nomeContratadoExecutanteField.schema,
	codigoCNES: codigoCNESField.schema,
	tipoAtendimento: tipoAtendimentoField.schema,
	indicacaoAcidente: indicacaoAcidenteField.schema,
	tipoConsulta: tipoConsultaField.schema,
	motivoEncerramentoAtendimento: motivoEncerramentoAtendimentoField.schema,
	dataExecucao: dataExecucaoField.schema,
	horaInicial: horaInicialField.schema,
	horaFinal: horaFinalField.schema,
	tabelaExecutada: tabelaExecutadaField.schema,
	codigoProcedimentoExecutado: codigoProcedimentoExecutadoField.schema,
	descricaoProcedimento: descricaoProcedimentoField.schema,
	quantidadeExecutada: quantidadeExecutadaField.schema,
	viaAcesso: viaAcessoField.schema,
	tecnica: tecnicaField.schema,
	fatorReducaoAcrescimo: fatorReducaoAcrescimoField.schema,
	valorUnitario: valorUnitarioField.schema,
	valorTotal: valorTotalField.schema,
	grauParticipacao: grauParticipacaoField.schema,
	sequencialReferencia: sequencialReferenciaField.schema,
	codigoOperadoraCPF: codigoOperadoraCPFField.schema,
	nomeProfissional: nomeProfissionalField.schema,
	conselhoProfissionalExecutante: conselhoProfissionalExecutanteField.schema,
	numeroConselhoExecutante: numeroConselhoExecutanteField.schema,
	ufExecutante: ufExecutanteField.schema,
	codigoCBOExecutante: codigoCBOExecutanteField.schema,
	dataRealizacaoProcedimentos: dataRealizacaoProcedimentosField.schema,
	assinaturaBeneficiarioResponsavel:
		assinaturaBeneficiarioResponsavelField.schema,
	observacaoJustificativa: observacaoJustificativaField.schema,
	totalProcedimentos: totalProcedimentosField.schema,
	totalTaxasAlugueis: totalTaxasAlugueisField.schema,
	totalMateriais: totalMateriaisField.schema,
	totalOPME: totalOPMEField.schema,
	totalMedicamentos: totalMedicamentosField.schema,
	totalGasesMedicinais: totalGasesMedicinaisField.schema,
	totalGeral: totalGeralField.schema,
	assinaturaResponsavelAutorizacao:
		assinaturaResponsavelAutorizacaoField.schema,
	assinaturaBeneficiarioResponsavelFinal:
		assinaturaBeneficiarioResponsavelFinalField.schema,
	assinaturaContratado: assinaturaContratadoField.schema,
})

export type {
	GuiaSadtFieldDefinition,
	GuiaSadtFieldName,
	GuiaSadtForm,
} from './types'
