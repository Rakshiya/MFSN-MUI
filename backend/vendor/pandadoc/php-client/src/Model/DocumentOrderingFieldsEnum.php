<?php
/**
 * DocumentOrderingFieldsEnum
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
 * DocumentOrderingFieldsEnum Class Doc Comment
 *
 * @category Class
 * @package  PandaDoc\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class DocumentOrderingFieldsEnum
{
    /**
     * Possible values of this enum
     */
    const NAME = 'name';

    const DATE_CREATED = 'date_created';

    const DATE_STATUS_CHANGED = 'date_status_changed';

    const DATE_OF_LAST_ACTION = 'date_of_last_action';

    const DATE_MODIFIED = 'date_modified';

    const DATE_SENT = 'date_sent';

    const DATE_COMPLETED = 'date_completed';

    const DATE_EXPIRATION = 'date_expiration';

    const DATE_DECLINED = 'date_declined';

    const STATUS = 'status';

    const NAME = '-name';

    const DATE_CREATED = '-date_created';

    const DATE_STATUS_CHANGED = '-date_status_changed';

    const DATE_OF_LAST_ACTION = '-date_of_last_action';

    const DATE_MODIFIED = '-date_modified';

    const DATE_SENT = '-date_sent';

    const DATE_COMPLETED = '-date_completed';

    const DATE_EXPIRATION = '-date_expiration';

    const DATE_DECLINED = '-date_declined';

    const STATUS = '-status';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    #[\ReturnTypeWillChange]
    public static function getAllowableEnumValues()
    {
        return [
            self::NAME,
            self::DATE_CREATED,
            self::DATE_STATUS_CHANGED,
            self::DATE_OF_LAST_ACTION,
            self::DATE_MODIFIED,
            self::DATE_SENT,
            self::DATE_COMPLETED,
            self::DATE_EXPIRATION,
            self::DATE_DECLINED,
            self::STATUS,
            self::NAME,
            self::DATE_CREATED,
            self::DATE_STATUS_CHANGED,
            self::DATE_OF_LAST_ACTION,
            self::DATE_MODIFIED,
            self::DATE_SENT,
            self::DATE_COMPLETED,
            self::DATE_EXPIRATION,
            self::DATE_DECLINED,
            self::STATUS
        ];
    }
}


