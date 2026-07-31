USE [ProductividadOrdenes]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[sp_InsertarPreNotificacion]
    @Orden VARCHAR(8),
    @CantidadInicialOrden NUMERIC(13,3),
    @CantidadRealOrden NUMERIC(13,3),
    @UsuarioLog VARCHAR(20),
    @Estado VARCHAR(1),
    @MaterialOrden VARCHAR(20),
    @NombreMaterialOrden VARCHAR(80),
    @MaterialComponente VARCHAR(20),
    @NombreMaterialComponente VARCHAR(80),
    @CantidadInicialComponente NUMERIC(13,3),
    @CantidadRealComponente NUMERIC(13,3)
AS
BEGIN
    -- Evita el envío de mensajes de filas afectadas para reducir el tráfico de red y mejorar el rendimiento
    SET NOCOUNT ON;

    DECLARE @Insertado BIT = 0;

    -- Validación: Solo inserta si NO existe la misma Orden con el mismo Estado
    IF NOT EXISTS (
        SELECT 1
        FROM dbo.pre_notificaciones
        WHERE Orden = @Orden
          AND Estado = @Estado
    )
    BEGIN
        INSERT INTO dbo.pre_notificaciones (
            Orden,
            Fecha,
            CantidadInicialOrden,
            CantidadRealOrden,
            UsuarioLog,
            Estado,
            MaterialOrden,
            NombreMaterialOrden,
            MaterialComponente,
            NombreMaterialComponente,
            CantidadInicialComponente,
            CantidadRealComponente
        )
        VALUES (
            @Orden,
            GETDATE(),    -- Se inserta la fecha y hora actual del servidor
            @CantidadInicialOrden,
            @CantidadRealOrden,
            @UsuarioLog,
            @Estado,
            @MaterialOrden,
            @NombreMaterialOrden,
            @MaterialComponente,
            @NombreMaterialComponente,
            @CantidadInicialComponente,
            @CantidadRealComponente
        );

        SET @Insertado = 1;
    END

    -- Informa al llamador si se realizó o no la inserción
    SELECT @Insertado AS Insertado;

END
GO
