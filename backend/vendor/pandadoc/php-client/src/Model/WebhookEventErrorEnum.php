<?php
/**
 * WebhookEventErrorEnum
 *
 * PHP version 7.3
 *
 * @category Class
 * @package  PandaDoc\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * PandaDoc Public API
 *
 * PandaDoc Public API documentation
 *
 * Generated by: https://openapi-generator.tech
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace PandaDoc\Client\Model;
use \PandaDoc\Client\ObjectSerializer;

/**
 * WebhookEventErrorEnum Class Doc Comment
 *
 * @category Class
 * @package  PandaDoc\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class WebhookEventErrorEnum
{
    /**
     * Possible values of this enum
     */
    const INTERNAL_ERROR = 'INTERNAL_ERROR';

    const NOT_VALID_URL = 'NOT_VALID_URL';

    const CONNECT_ERROR = 'CONNECT_ERROR';

    const TIMEOUT_ERROR = 'TIMEOUT_ERROR';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    #[\ReturnTypeWillChange]
    public static function getAllowableEnumValues()
    {
        return [
            self::INTERNAL_ERROR,
            self::NOT_VALID_URL,
            self::CONNECT_ERROR,
            self::TIMEOUT_ERROR
        ];
    }
}


