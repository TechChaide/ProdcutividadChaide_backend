USE [ProductividadOrdenes]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Desperdicio pesado en la balanza (BMP_Balanza) por su código de barras.
-- ESTADO: 1 = pendiente de ingresar, 2 = ingresado (DOCUMENTO guarda la respuesta de SAP).
CREATE PROCEDURE [dbo].[sp_BuscaDesperdicioXCodBarras]
    @codbarras NVARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;

    SELECT
        REGIONAL,
        DEPARTAMENTO,
        TARA,
        COMPONENTE,
        DESPERDICIO_NETO,
        DESPERDICIO_BRUTO,
        TIPO_DESPERDICIO,
        RESPONSABLE,
        MAQUINA,
        CONVERT(VARCHAR(19), FECHA, 120) AS FECHA,
        CODBARRAS,
        ESTADO,
        DOCUMENTO
    FROM [BMP_Balanza].[dbo].[DesperdiciosAreas]
    WHERE CODBARRAS = LTRIM(RTRIM(@codbarras));
END
GO

-- Marca el desperdicio como ingresado y guarda el mensaje devuelto por SAP como DOCUMENTO.
CREATE PROCEDURE [dbo].[sp_IngresaDesperdicio]
    @codbarras NVARCHAR(50),
    @documento NVARCHAR(250)
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE [BMP_Balanza].[dbo].[DesperdiciosAreas]
    SET ESTADO = 2,
        DOCUMENTO = @documento
    WHERE CODBARRAS = LTRIM(RTRIM(@codbarras));

    SELECT @@ROWCOUNT AS Actualizados;
END
GO
