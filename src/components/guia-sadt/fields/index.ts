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
})

export type {
	GuiaSadtFieldDefinition,
	GuiaSadtFieldName,
	GuiaSadtForm,
} from './types'
